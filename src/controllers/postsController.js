import fs from "fs"
import {getTodosPosts,criarPost} from "../models/postModels.js"

// modelo de resposta 

export async function listarPosts(req,res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts)
    
    }

// modelo de requisição para postagem de conteúdo

export async function postarNovoPost(req,res) {
    const novoPost = req.body 
    try {
        const postCriado = await criarPost(novoPost)
        res.status(200).json(postCriado); 
    }
    
    catch(erro) {
        console.error(erro.message);
        res.status(500).json({"ERRO":"falha na requisição"});
    }

    }
   

    export async function uploadImagem(req,res) {
        const novoPost = {
            descricao: "",
            imgUrl: req.file.originalname,
            alt:""
        } ;

        try {
            const postCriado = await criarPost(novoPost)
            const imagemAtualizada =`uploads/${postCriado.insertedId}.jpeg`
            fs.renameSync(req.file.path, imagemAtualizada)
            res.status(200).json(postCriado); 
        }
        
        catch(erro) {
            console.error(erro.message);
            res.status(500).json({"ERRO":"falha na requisição"});
        }
    
    }    