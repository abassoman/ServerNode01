# Proyecto Server

## Paso I.- Modificar archivo **package.json**

``` json
    "main": "dist/main.js",
    "scripts": {
        "start": "rm -rf dist/ && tsc && node dist/main.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
```

## Paso II.- Modificar archivo **tsconfig.json**

``` json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "outDir": "dist",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "files": [
        "./src/main.ts"
    ]
}
```

## Paso III.- Para ejecutar el proyecto, desde la consola escribir

``` bash
    npm start
```

-----

## Clonar Repositorio


``` bash
    git clone https://github.com/abassoman/ServerNode01.git
```
