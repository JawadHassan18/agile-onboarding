import express, { Express, Request, Response, Application } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from 'path';
import axios from 'axios';

const PORT: number = 3000;
const HOST: string = '127.0.0.1';

const app: Express = express();
const httpServer = createServer(app);
const io: Server = new Server(httpServer);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let sequenceNumberByClient = new Map();



app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message:"Hello world"
    });
});

app.get("/myownpath",(req: Request, res: Response) => {
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

io.on("connection", (socket: Socket) => {
    console.log(`a user connected with id: ${socket.id}`);
    sequenceNumberByClient.set(socket.id, 1);

    socket.on("Profile", async (message: any) => {
        console.log(message, socket.id);
        socket.emit("Profile","HELLO!");
        var responseObject =  await fetchProfile(message);
        //let data = {"username":"Jawad Hassn","url":"in/jawad-hassan-6a1a11225/","num_connections":"4"}
        //console.log(responseObject);
        socket.emit("Profile", JSON.stringify(responseObject)); 
    });

    socket.on("disconnect", () => {
        sequenceNumberByClient.delete(socket);
        console.info(`Client gone [id=${socket.id}]`);
    });
});


const fetchProfile = async (profileurl: string) => {
    try {
        let res = await axios({
            method: 'post',
            url: 'https://www.mantheos.com/api/v2/profiles/linkedin-url/',
            headers: { 
                'Authorization': 'Token 90b2f93f222e690a698e312a9ce589b336748b84', 
                'Content-Type': 'application/json'
            },
            data: { 
                "linkedin_profile_url": profileurl,
                "include_num_followers": false,
                "include_profile_image": false
            }
        });
        let jsonstring = JSON.stringify(res.data);
        let jsonObj = JSON.parse(jsonstring);
        let profiledata = jsonObj.profiles;
        return profiledata;
    } catch (error) {
            console.log(error); 
            return error;
    }
}


httpServer.listen(PORT, HOST, () => console.log(`The server is running on port ${PORT}`));