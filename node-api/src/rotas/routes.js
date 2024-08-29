const express = require("express");
const router = express.Router()


const cursos = [
    'Python',
    'Python/ML',
    'Node',
    'GoLang',
    'GoLang',
    'GoLang',
    'GoLang',
    
]


// router.get("/curso", (req,res) => {

//     // Pega da url de acordo com a chave : ex curso?id=100
//     const id = req.query.id
//     res.status(200).send({erro:id})
// })

// router.get("/curso/:id", (req,res) => {

//     // Pega da url de acordo com a params : ex curso/:id
//     const id = req.params.id

//     const curso = cursos.find((item) => item.id === id )

//     res.status(200).send({erro:` estou no curso ${curso}`})


// })



router.get("/curso", (req,res) => {


    return res.json(cursos)
})


router.post("/cursos", (req,res) => {

    const { nome } = req.body
    cursos.push(nome)

    return res.json(cursos)
    
})



router.put("/curso/:id", (req,res) => {

    // Pega da url de acordo com a params : ex curso/:id
    const { id } = req.params

    const { nome } = req.body

    cursos[id] = {
        id : id,
        nome : nome
    }

    res.status(200).send(cursos)


})

router.delete('/curso/:id', (req, res) => {
    const { id } = req.params;

    // Converte o id para número para comparação correta
    const cursoId = parseInt(id);

    // Verifica se o curso existe
    const index = cursos.findIndex((item) => item.id === cursoId);

    if (index !== -1) {
        // Remove o item do array se encontrado
        cursos.splice(index, 1);
        
        // Retorna o array atualizado
        res.json(cursos);
    } else {
        // Retorna uma mensagem se o curso não for encontrado
        res.status(404).json({ message: 'Curso não encontrado ou já foi excluído' });
    }
});

module.exports = router;
