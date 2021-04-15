import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as shell from "shelljs";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const router = express.Router();
dotenv.config();
const port = process.env.SERVER_PORT;


console.log('Se inica proyecto: Proyecto Server');

class Libro{
    private _autor: string;
    private _paginas: number;
    private _usado: boolean;
    constructor(autor: string, paginas: number, usado: boolean){
        this._autor = autor;
        this._paginas = paginas;
        this._usado = usado;
    }
}
class Libreria{
    private _libros: Libro[];
    
    constructor(){
        this._libros = Array();
        try {
            let json= fs.readFileSync('e://archivolibros.json', 'utf8');
            this._libros=JSON.parse(json);
          } catch (err) {
            console.error(err);
          }
    }
    agregar(libro: Libro){
        this._libros.push(libro);
        try {
            fs.writeFileSync('e://archivolibros.json', JSON.stringify(this._libros,null,2));
          } catch (err) {
            console.error(err);
          }
    }
    stock(){
        return this._libros.length;
    }
}

let libreria=new Libreria();
console.log('La libreria tiene: '+ libreria.stock() + ' libros');
let libro1=new Libro('La Biblia', 10, true);
let libro2=new Libro('Siddartha', 26,false);
libreria.agregar(libro1);
libreria.agregar(libro2);
console.log('La libreria tiene: '+ libreria.stock() + ' libros');
/*
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
*/