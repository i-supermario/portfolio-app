import fastify from 'fastify'
import { configDotenv } from "dotenv"
import cors from "@fastify/cors"

configDotenv()
const server = fastify()
await server.register(cors)

let spotifyAccessToken = ""
let refreshToken = ""

interface IQuerystring {
  code: string;
}

interface IHeaders {
  'h-Custom': string;
}

interface IReply {
  200: { success: boolean } | { access_token: string } | { refresh_token: string }
  302: { url: string };
  '4xx': { error: string };
}

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
    console.log("Using refresh token")
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
    spotifyAccessToken = responseJson.access_token

    if(response.status == 200){
      res.status(200).send({"success":true, access_token: spotifyAccessToken, refresh_token: refreshToken }).redirect("/")
    }
    res.send(400).send({"success": false})

  }
  else{
    console.log("Using authorization")
    let authQueryParams = new URLSearchParams({
      response_type: "code",
      client_id: process.env.SPOTIFY_CLIENT_ID as string,
      scope: scope,
      redirect_uri: "https://portfolio-backend-yb78.onrender.com/auth/callback",
      // redirect_uri: 'http://localhost:8080/auth/callback',
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
      redirect_uri: 'https://portfolio-backend-yb78.onrender.com/auth/callback',
      // redirect_uri: 'http://localhost:8080/auth/callback',
      grant_type: 'authorization_code',
    }),
  };

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
    if (response.ok) {
      const body = await response.json()
      spotifyAccessToken = body.access_token as string
      refreshToken = body.refresh_token as string
       
      console.log(spotifyAccessToken)
      res.status(200).send({"success":true, access_token: spotifyAccessToken, refresh_token: refreshToken }).redirect("/")
    }
    res.status(400).send({"error":"Try Catch Exception"})
  } catch (error) {
    console.error('Error:', error);
    res.status(400).send({"error":error as string});
  }
});

server.get<{
  Reply: IReply
}>("/auth/token", async (req, res) => res.status(200).send({"access_token":spotifyAccessToken}))

server.listen(10000, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err)
  }
  console.log(`Server listening at ${address}`)
})