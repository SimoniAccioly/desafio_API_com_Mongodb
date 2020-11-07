const model= require("../models/Schema");

const getFilmes = (req, res) => {
  console.log(req.url); 
  model.filmesCollection.find((error, filme) => {
    if (error) {
      return res.status(500).send(error); 
    } else { 
      return res.status(200).send(filme);
    }
  });
};


const getFilmeById = (req, res) => {
  const idParam = req.params.id; 
  model.filmesCollection.findById(idParam, (error, filme) => { 
    if (error) {
      return res.status(500).send(error);
    } else {
      if (filme) {
        return res.status(200).send(filme);
      } else {
        return res.status(404).send("Filme não encontrado =("); 
      }
    }
  });
};


const addFilme = (req,res) => {
  console.log(req.url) 
  const body = req.body 
  const filme = new model.filmesCollection(body)

  filme.save((error) =>{ 
      if(error){
          return res.status(400).send(error) 
      } else {
          return res.status(201).send(filme)
      }
  })
}


const updateFilme = (req, res) => {
  const idParam = req.params.id 
  const body = req.body
  const novo = {new: true} 

  model.filmesCollection.findByIdAndUpdate( 
      idParam,
      body, 
      novo,
      (error, filme) =>{ 
          if(error){
              return res.status(500).send(error)
          } else if (filme) {
              return res.status(200).send(filme) 
          } else{
              return res.sendStatus(404) 
          }
      }
  )    
}


const deleteFilme = (req, res) => {
  const idParam = req.params.id
  model.filmesCollection.findByIdAndDelete(idParam, (error, filme) =>
  {
      if(error){
          return res.status(500).send(error)
          } else{
              if(filme){
                  return res.status(200).send("O filme foi apagado")
              }else {
                  return res.sendStatus(404)
              }
          }
      })
  } 

module.exports = {
  getFilmes,
  getFilmeById,
  addFilme,
  updateFilme,
  deleteFilme,
};
