import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as shell from "shelljs";
import bodyParser from "body-parser";


console.log('Se inica proyecto: Proyecto Server');

dotenv.config();

const app = express();
const router = express.Router();
const port = process.env.SERVER_PORT;

shell.cp( "-R", "src/views", "dist/" );

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.get( "/", ( req, res ) => {
    res.render( "index" );
} );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/ejemplo',(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(request.body);

    let nombre = request.body.Nombre;
    if(nombre=="Alan"){
        response.status(204).json({Mensaje:'Tengo un mensaje vacio'});
    } else{
        response.status(200).json({Mensaje:'hola: '+ nombre});
    }
    return;
});

// add router in the Express app.
app.use("/", router);

app.listen( port, () => {
    console.log(  );
} );
