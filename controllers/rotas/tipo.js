const model = new require('../../models/tipo');
const rota = 'tipo';
module.exports = (app) => {
    app.post(`/cadastrar/${rota}`, async (req, res)=>{
        let dados = req.body
        let respBd = await model.create(dados)
        res.json(respBd)
    })
    app.get(`/consultar/${rota}/:id?`, async (req, res)=>{
        try{ 
        let dados = req.params.id? 
        await model.findOne({where:{id:req.params.id}}) : 
        await model.findAll()
        res.json(dados).status(200)
    } catch (error){
        res.json(error).status(400)
    }})
    app.put(`/atualizar/${rota}/:id`, async (req, res) => {
        let id = req.params.id
        let dados = req.body
        let respBd = await model.update(dados, {where:{id:id}})
        res.json(respBd)
    })
    app.delete(`/excluir/${rota}/:id`, async (req, res) => {
        let id = req.params.id
        let respBd = await model.destroy({where:{id:id}})
        res.json(respBd)
    })
}