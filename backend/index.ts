import fastify from 'fastify'
import { configDotenv } from "dotenv"
import cors from "@fastify/cors"
import { IHeaders, IQuerystring, IReply } from './types.js'
import { getAccessToken, setAccessToken } from './utils.js'


configDotenv()
const server = fastify({
  logger: true
})
await server.register(cors)

let refreshToken = ""

// extra space added when setting NODE_ENV 
const ENV = process.env.NODE_ENV?.trim()
const PORT = ENV === `development` ? 8080 : 10000
const HOST = ENV === `development` ? 'localhost' : '0.0.0.0' 


server.get('/', async (request, reply) => {
  reply.send({"Message": "Connected to backend"})
})

server.get('/auth/login', async (req, res)=> {

  console.log("login")
  let scope = "streaming \
  user-read-email \
  user-read-private"

  let state = "randomString"
   
  if(refreshToken){

    const url = "https://accounts.spotify.com/api/token";

    let authOptions = {
      method:"POST",
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`),
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      }),
      json: true
    };
    
    const response = await fetch(url, authOptions);
    const responseJson = await response.json();
    setAccessToken(responseJson.access_token)

    if(response.status == 200){
      res.status(200).send({"success":true}).redirect("http://localhost:5173/music")
    }
    res.send(400).send({"success": false})

  }
  else{
    let authQueryParams = new URLSearchParams({
      response_type: "code",
      client_id: process.env.SPOTIFY_CLIENT_ID as string,
      scope: scope,
      redirect_uri: ENV == 'development' ? `http://localhost:${PORT}/auth/callback` : "https://portfolio-backend-yb78.onrender.com/auth/callback",
      state: state
    })
  
    res.redirect("https://accounts.spotify.com/authorize/?"+authQueryParams.toString())
  }

})

server.get<{
  Querystring: IQuerystring,
  Headers: IHeaders,
  Reply: IReply
}>('/auth/callback', async (req, res) => {

  console.log("callback")

  const query = req.query 
  const code = query.code

  const authOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code: code,
      redirect_uri: ENV == 'development' ? `http://localhost:${PORT}/auth/callback` : "https://portfolio-backend-yb78.onrender.com/auth/callback",
      grant_type: 'authorization_code',
    }),
  };

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
    if (response.ok) {

      const body = await response.json()
      setAccessToken(body.access_token as string)
      refreshToken = body.refresh_token as string
       
      res.status(200).send({"success":true}).redirect("http://localhost:5173/music")
    }

    res.status(400).send({"error":"Try Catch Exception"})
  } 
  catch (error) {

    console.error('Error:', error);
    res.status(400).send({"error":error as string});

  }
});

server.get<{
  Reply: IReply
}>("/auth/token", async (req, res) => res.status(200).send({"access_token":getAccessToken()}))

server.listen({
    port: PORT,
    host: HOST
  },(err, address) => {
  if (err) {
    console.error(err)
  }
  console.log(`Server listening at ${address}`)
})