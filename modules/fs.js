const fs = require("fs")
const path = require("path")

// // Criar uma pasta 
// fs.mkdir(path.join(__dirname, "/testando"), (error) => {
//     if(error) {
//         return console.error("Erro: ", error) // console já é global!
//     }

//     console.log("Pasta criada com Sucesso!")
// })


// Cria um arquivo
fs.writeFile(
    path.join(__dirname, "/test", "test.txt"),
    "hello node!",
    (error) => {
        if(error){
            return console.log("Erro: ", error)
        }

        console.log("Arquivo criado com sucesso!")
    }
);

// Adicionar a um arquivo
fs.appendFile(
    path.join(__dirname, "/test", "test.txt"),
    "hello world!",
    (error) => {
        if(error) {
            return console.log("Erro: ", error);
        }

        console.log("Arquivo modificado com sucesso!")
    }
);

