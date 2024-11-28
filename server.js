import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();

app.use(express.static("uploads"));

routes(app);
//routes();

app.listen(3000, () => {
    console.log("servidor escutando");
} );




// app.get("/posts", async (req,res) => {
//     const posts = await getTodosPosts()
//     res.status(200).json(posts)
    
//     });
    

// function getPostPorID(id){

// const db = conexao.db("projeto-alura")
// const colecao = db.collection("posts")
// const posts = colecao.find(id)
// return posts
// };

// const posts = [

//     {
//         id: 1,
//         descricao: "uma foto", 
//         imagem: "https://placecats.com/millie/300/150"
      
//     },
//     {
//         id:2,
//         descricao: "foto 2", 
//         imagem: "https://placecats.com/millie/300/150"
      
//     },
//     {
//         id:3,
//         descricao: "foto 3", 
//         imagem: "https://placecats.com/millie/300/150"
      
//     }

// ];




//essa função busca dentro dos posts o 

// function buscarPostPorID(id){
//     return posts.findIndex((posts) => {
//         return posts.id === Number(id)
//     })
// };


// app.get("/posts", async (req,res) => {
// const posts = await getTodosPosts()
// res.status(200).json(posts)

// });


// // rota (link) onde eu busco as informações
//  app.get("/posts/:id", (req,res) => {
//      const index = buscarPostPorID(req.params.id)
//      res.status(200).json(posts[index]);
//  });


// app.get("/posts/:id", async (req,res) => {
    
//     const index = await getPostPorID(req.params.id)
//     res.status(200).json(index);
// });

