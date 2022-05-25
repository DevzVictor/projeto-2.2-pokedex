const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


const pokedex = [
  {
    id: 1,
    nome: "Bulbasaur",
    descricao: "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
    altura: 0.7,
    peso: 6.9,
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 2,
    nome: "Ivysaur",
    descricao: "Quando o bulbo nas costas cresce, parece perder a capacidade de ficar em pé nas patas traseiras.",
    altura: 1.0,
    peso: 13.0,
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
  },
  {
    id: 3,
    nome: "Venusaur",
    descricao: "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol.",
    altura: 2.0,
    peso: 100.0,
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
  },
  {
    id: 4,
    nome: "Charmander",
    descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda",
    altura: 0.6,
    peso: 8.5,
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 5,
    nome: "Charmeleon",
    descricao: "Tem uma natureza bárbara. Na batalha ele chicoteia sua cauda de fogo e corta com garras afiadas.",
    altura: 1.1,
    peso: 19.0,
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
  },
  {
    id: 6,
    nome: "Charizard",
    descricao: "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas..",
    altura: 1.7,
    peso: 90.5,
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
  },
  {
    id: 7,
    nome: "Squirtle",
    descricao: "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.",
    altura: 0.5,
    peso: 9.0,
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
  {
    id: 8,
    nome: "Wartortle",
    descricao: "É reconhecido como um símbolo de longevidade. Se a concha tiver algas, esse Wartortle é muito antigo.",
    altura: 1.0,
    peso: 22.5,
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
  },
  {
    id: 9,
    nome: "Blastoise",
    descricao: "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.",
    altura: 1.6,
    peso: 85.5,
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
  },
]

// ROTAS
app.get("/", (req, res) => {
  res.render("index", {pokedex});
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
