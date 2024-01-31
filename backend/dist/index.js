import fastify from 'fastify';
import { configDotenv } from "dotenv";
import cors from "@fastify/cors";
configDotenv();
const server = fastify();
await server.register(cors);
let spotifyAccessToeken = "";
server.get('/', async (request, reply) => {
    reply.send({ "Message": "Connected to backend" });
});
server.get('/auth/login', (req, res) => {
    console.log("login");
    let scope = "streaming \
  user-read-email \
  user-read-private";
    let state = "randomString";
    let authQueryParams = new URLSearchParams({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: "http://localhost:8080/auth/callback",
        state: state
    });
    res.redirect("https://accounts.spotify.com/authorize/?" + authQueryParams.toString());
});
server.get('/auth/callback', async (req, res) => {
    console.log("callback");
    const query = req.query;
    const code = query.code;
    const authOptions = {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            code: code,
            redirect_uri: 'http://localhost:8080/auth/callback',
            grant_type: 'authorization_code',
        }),
    };
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
        if (response.ok) {
            const body = await response.json();
            spotifyAccessToeken = body.access_token;
            console.log(spotifyAccessToeken);
            res.status(200).send({ "success": true }).redirect("/");
        }
        res.status(400).send({ "error": "Try Catch Exception" });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(400).send({ "error": error });
    }
});
server.get("/auth/token", async (req, res) => res.status(200).send({ "access_token": spotifyAccessToeken }));
server.listen({ port: 8080 || process.env.PORT }, (err, address) => {
    if (err) {
        console.error(err);
    }
    console.log(`Server listening at ${address}`);
});
