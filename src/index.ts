import express from "express";
import route from "./routing/routing";


const app = express ();

const port = 3002;
app.listen(port, () => {
    console.log("you listening to port: " + port);
})

app.use( express.json() );
app.use(route);
