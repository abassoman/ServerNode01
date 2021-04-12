import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as shell from "shelljs";

console.log('Se inica proyecto: Proyecto Server');

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

shell.cp( "-R", "src/views", "dist/" );

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.get( "/", ( req, res ) => {
    res.render( "index" );
} );

app.listen( port, () => {
    console.log(  );
} );
