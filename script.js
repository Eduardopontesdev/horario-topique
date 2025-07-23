const rotas = [
  {
    id: "granja-camocim",
    nome: "Granja - Camocim",
    preco: 7.45,
    horarios: {
      semana: [
        ["05:45", "06:25"],
        ["06:00", "06:40"],
        ["06:20", "07:00"],
        ["06:40", "07:20"],
        ["07:00", "07:40"],
        ["07:20", "08:00"],
        ["07:40", "08:20"],
        ["08:00", "08:40"],
        ["08:20", "09:00"],
        ["08:40", "09:20"],
        ["09:00", "09:40"],
        ["09:20", "10:00"],
        ["09:40", "10:20"],
        ["10:00", "10:40"],
        ["10:20", "11:00"],
        ["10:40", "11:20"],
        ["11:00", "11:40"],
        ["11:20", "12:00"],
        ["11:40", "12:20"],
        ["12:00", "12:40"],
        ["12:25", "13:05"],
        ["12:50", "13:30"],
        ["13:15", "13:55"],
        ["13:40", "14:20"],
        ["14:05", "14:45"],
        ["14:30", "15:10"],
        ["14:55", "15:35"],
        ["15:20", "16:00"],
        ["15:45", "16:25"],
        ["16:10", "16:50"],
        ["16:35", "17:15"],
        ["17:00", "17:40"],
        ["17:25", "18:05"],
        ["18:00", "18:40"],
      ],
      sabado: [
        ["05:45", "06:25"],
        ["06:00", "06:40"],
        ["06:20", "07:00"],
        ["06:40", "07:20"],
        ["07:00", "07:40"],
        ["07:20", "08:00"],
        ["07:40", "08:20"],
        ["08:00", "08:40"],
        ["08:20", "09:00"],
        ["08:40", "09:20"],
        ["09:00", "09:40"],
        ["09:20", "10:00"],
        ["09:40", "10:20"],
        ["10:00", "10:40"],
        ["10:20", "11:00"],
        ["10:40", "11:20"],
        ["11:00", "11:40"],
        ["11:20", "12:00"],
        ["11:40", "12:20"],
        ["12:00", "12:40"],
        ["12:25", "13:05"],
        ["12:50", "13:30"],
        ["13:15", "13:55"],
        ["13:40", "14:20"],
        ["14:05", "14:45"],
        ["14:30", "15:10"],
        ["14:55", "15:35"],
        ["15:20", "16:00"],
        ["15:45", "16:25"],
        ["16:10", "16:50"],
        ["16:35", "17:15"],
        ["17:00", "17:40"],
        ["17:25", "18:05"],
        ["18:00", "18:40"],
      ],
      domingo: [
        ["07:00", "07:40"],
        ["09:00", "09:40"],
        ["11:00", "11:40"],
        ["13:00", "13:40"],
        ["15:00", "15:40"],
        ["17:00", "17:40"],
      ],
    },
    colunas: ["Saída de Granja", "Chegada em Camocim"],
  },
  {
    id: "camocim-granja",
    nome: "Camocim - Granja",
    preco: 7.45,
    horarios: {
      semana: [
        ["06:30", "07:10"],
        ["06:45", "07:25"],
        ["07:05", "07:45"],
        ["07:25", "08:05"],
        ["07:45", "08:25"],
        ["08:05", "08:45"],
        ["08:25", "09:05"],
        ["08:45", "09:25"],
        ["09:05", "09:45"],
        ["09:25", "10:05"],
        ["09:45", "10:25"],
        ["10:05", "10:45"],
        ["10:25", "11:05"],
        ["10:45", "11:25"],
        ["11:05", "11:45"],
        ["11:25", "12:05"],
        ["11:45", "12:25"],
        ["12:05", "12:45"],
        ["12:25", "13:05"],
        ["12:45", "13:25"],
        ["13:10", "13:50"],
        ["13:35", "14:15"],
        ["14:00", "14:40"],
        ["14:25", "15:05"],
        ["14:50", "15:30"],
        ["15:15", "15:55"],
        ["15:40", "16:20"],
        ["16:05", "16:45"],
        ["16:30", "17:10"],
        ["16:55", "17:35"],
        ["17:20", "18:00"],
        ["17:45", "18:25"],
        ["18:10", "18:50"],
        ["18:45", "19:25"],
      ],
      sabado: [
        ["06:30", "07:10"],
        ["06:45", "07:25"],
        ["07:05", "07:45"],
        ["07:25", "08:05"],
        ["07:45", "08:25"],
        ["08:05", "08:45"],
        ["08:25", "09:05"],
        ["08:45", "09:25"],
        ["09:05", "09:45"],
        ["09:25", "10:05"],
        ["09:45", "10:25"],
        ["10:05", "10:45"],
        ["10:25", "11:05"],
        ["10:45", "11:25"],
        ["11:05", "11:45"],
        ["11:25", "12:05"],
        ["11:45", "12:25"],
        ["12:05", "12:45"],
        ["12:25", "13:05"],
        ["12:45", "13:25"],
        ["13:10", "13:50"],
        ["13:35", "14:15"],
        ["14:00", "14:40"],
        ["14:25", "15:05"],
        ["14:50", "15:30"],
        ["15:15", "15:55"],
        ["15:40", "16:20"],
        ["16:05", "16:45"],
        ["16:30", "17:10"],
        ["16:55", "17:35"],
        ["17:20", "18:00"],
        ["17:45", "18:25"],
        ["18:10", "18:50"],
        ["18:45", "19:25"],
      ],
      domingo: [
        ["09:00", "09:40"],
        ["11:00", "11:40"],
        ["13:00", "13:40"],
        ["15:00", "15:40"],
        ["17:00", "17:40"],
        ["17:45", "18:25"],
      ],
    },
    colunas: ["Saída de Camocim", "Chegada em Granja"],
  },
  {
    id: "chaval-camocim",
    nome: "Chaval - Camocim",
    preco: 14.95,
    horarios: {
      semana: [
        ["06:00", "07:00"],
        ["06:30", "07:30"],
        ["07:00", "08:00"],
        ["09:30", "10:30"],
        ["11:40", "12:40"],
        ["12:50", "13:50"],
      ],
      sabado: [["07:10", "08:10"]],
      domingo: [],
    },
    colunas: ["Saída de Chaval", "Chegada em Camocim"],
  },
  {
    id: "camocim-chaval",
    nome: "Camocim - Chaval",
    preco: 14.95,
    horarios: {
      semana: [
        ["07:50", "08:50"],
        ["09:50", "10:50"],
        ["10:50", "11:50"],
        ["11:40", "12:40"],
        ["14:30", "15:30"],
        ["16:30", "17:30"],
      ],
      sabado: [["11:30", "12:30"]],
      domingo: [],
    },
    colunas: ["Saída de Camocim", "Chegada em Chaval"],
  },
  {
    id: "barroquinha-camocim",
    nome: "Barroquinha - Camocim",
    preco: 11.2,
    horarios: {
      semana: [
        ["05:40", "06:30"],
        ["06:10", "07:00"],
        ["06:40", "07:30"],
        ["07:10", "08:00"],
        ["08:10", "09:00"],
        ["09:40", "10:30"],
        ["10:30", "11:20"],
        ["11:30", "12:20"],
        ["12:50", "13:40"],
        ["14:40", "15:30"],
        ["16:50", "17:40"],
      ],
      sabado: [
        ["06:15", "07:00"],
        ["07:15", "08:00"],
        ["08:15", "09:00"],
        ["10:30", "11:20"],
        ["12:50", "13:40"],
        ["16:50", "17:40"],
      ],
      domingo: [["07:10", "08:00"]],
    },
    colunas: ["Saída de Barroquinha", "Chegada em Camocim"],
  },
  {
    id: "camocim-barroquinha",
    nome: "Camocim - Barroquinha",
    preco: 11.2,
    horarios: {
      semana: [
        ["07:10", "08:00"],
        ["08:20", "09:30"],
        ["08:50", "09:40"],
        ["09:20", "10:10"],
        ["10:20", "11:10"],
        ["11:20", "12:10"],
        ["12:10", "13:00"],
        ["13:00", "13:50"],
        ["14:00", "14:50"],
        ["15:50", "16:40"],
        ["18:00", "18:50"],
      ],
      sabado: [
        ["08:15", "09:00"],
        ["09:40", "10:30"],
        ["11:00", "11:50"],
        ["12:50", "13:40"],
        ["14:30", "15:20"],
        ["18:00", "18:50"],
      ],
      domingo: [["09:30", "10:20"]],
    },
    colunas: ["Saída de Camocim", "Chegada em Barroquinha"],
  },
  {
    id: "bitupita-camocim",
    nome: "Bitupitá - Camocim",
    preco: 19.1,
    horarios: {
      semana: [
        ["05:40", "06:15", "06:55"],
        ["06:40", "07:15", "07:55"],
        ["07:10", "07:40", "08:20"],
        ["13:00", "13:30", "14:10"],
      ],
      sabado: [["06:40", "07:20", "07:55"]],
      domingo: [],
    },
    colunas: [
      "Saída de Bitupitá",
      "Passa em Barroquinha",
      "Chegada em Camocim",
    ],
  },
  {
    id: "camocim-bitupita",
    nome: "Camocim - Bitupitá",
    preco: 19.1,
    horarios: {
      semana: [
        ["10:40", "11:20", "11:55"],
        ["11:30", "12:10", "12:45"],
        ["12:40", "13:20", "13:55"],
        ["16:10", "16:50", "17:55"],
      ],
      sabado: [["11:20", "12:00", "12:40"]],
      domingo: [],
    },
    colunas: [
      "Saída de Camocim",
      "Passa em Barroquinha",
      "Chegada em Bitupitá",
    ],
  },
  {
    id: "camocim-sobral",
    nome: "Camocim - Sobral",
    preco: 38.1,
    horarios: {
      semana: [
        ["03:30", "04:30", "05:00", "05:15", "05:30", "06:00"],
        ["05:00", "06:00", "06:30", "06:45", "07:00", "07:30"],
        ["07:00", "08:00", "08:30", "08:45", "09:00", "09:30"],
        ["09:00", "10:00", "10:30", "10:45", "11:00", "11:30"],
        ["11:00", "12:00", "12:30", "12:45", "13:00", "13:30"],
        ["13:00", "14:00", "14:30", "14:45", "15:00", "15:30"],
        ["15:00", "16:00", "16:30", "16:45", "17:00", "17:30"],
      ],
      sabado: [
        ["03:30", "04:30", "05:00", "05:15", "05:30", "06:00"],
        ["05:00", "06:00", "06:30", "06:45", "07:00", "07:30"],
        ["07:00", "08:00", "08:30", "08:45", "09:00", "09:30"],
        ["09:00", "10:00", "10:30", "10:45", "11:00", "11:30"],
        ["11:00", "12:00", "12:30", "12:45", "13:00", "13:30"],
        ["13:00", "14:00", "14:30", "14:45", "15:00", "15:30"],
        ["15:00", "16:00", "16:30", "16:45", "17:00", "17:30"],
      ],
      domingo: [
        ["04:30", "05:30", "06:00", "06:15", "06:30", "07:00"],
        ["07:00", "08:00", "08:30", "08:45", "09:00", "09:30"],
        ["15:00", "16:00", "16:30", "16:45", "17:00", "17:30"],
      ],
    },
    colunas: [
      "Saída de Camocim",
      "Passa em Martinópole",
      "Passa em Uruoca",
      "Passa em Senador",
      "Passa em Massapê",
      "Chegada em Sobral",
    ],
  },
  {
    id: "sobral-camocim",
    nome: "Sobral - Camocim",
    preco: 38.1,
    horarios: {
      semana: [
        ["06:00", "06:30", "06:45", "07:00", "07:30", "08:30"],
        ["08:00", "08:30", "08:45", "09:00", "09:30", "10:30"],
        ["11:00", "11:30", "11:45", "12:00", "12:30", "13:30"],
        ["13:00", "13:30", "13:45", "14:00", "14:30", "15:30"],
        ["15:00", "15:30", "15:45", "16:00", "16:30", "17:30"],
        ["17:00", "17:30", "17:45", "18:00", "18:30", "19:30"],
        ["18:20", "18:50", "19:05", "19:20", "19:50", "20:50"],
      ],
      sabado: [
        ["06:00", "06:30", "06:45", "07:00", "07:30", "08:30"],
        ["08:00", "08:30", "08:45", "09:00", "09:30", "10:30"],
        ["11:00", "11:30", "11:45", "12:00", "12:30", "13:30"],
        ["13:00", "13:30", "13:45", "14:00", "14:30", "15:30"],
        ["15:00", "15:30", "15:45", "16:00", "16:30", "17:30"],
        ["17:00", "17:30", "17:45", "18:00", "18:30", "19:30"],
        ["18:20", "18:50", "19:05", "19:20", "19:50", "20:50"],
      ],
      domingo: [
        ["07:00", "07:30", "07:45", "08:00", "08:30", "09:30"],
        ["11:00", "11:30", "11:45", "12:00", "12:30", "13:30"],
        ["18:20", "18:50", "19:05", "19:20", "19:50", "20:50"],
      ],
    },
    colunas: [
      "Saída de Sobral",
      "Passa em Massapê",
      "Passa em Senador",
      "Passa em Uruoca",
      "Passa em Martinópole",
      "Chegada em Camocim",
    ],
  },
  {
    id: "prea-camocim",
    nome: "Preá - Camocim",
    preco: 29.75,
    horarios: {
      semana: [
        ["05:00", "05:45", "06:15", "06:50", "07:30"],
        ["06:00", "06:45", "07:15", "07:50", "08:30"],
        ["07:00", "07:45", "08:15", "08:50", "09:30"],
        ["08:15", "09:00", "09:30", "10:05", "10:45"],
        ["09:30", "10:15", "10:45", "11:20", "12:00"],
        ["10:45", "11:30", "12:00", "12:35", "13:15"],
        ["12:00", "12:45", "13:15", "13:50", "14:30"],
        ["13:15", "14:00", "14:30", "15:05", "15:45"],
        ["14:30", "15:15", "15:45", "16:20", "17:00"],
        ["15:45", "16:30", "17:00", "17:35", "18:15"],
        ["17:00", "17:45", "18:15", "18:50", "19:30"],
        ["18:00", "18:45", "19:15", "19:50", "20:30"],
      ],
      sabado: [
        ["05:00", "05:45", "06:15", "06:50", "07:30"],
        ["06:00", "06:45", "07:15", "07:50", "08:30"],
        ["07:00", "07:45", "08:15", "08:50", "09:30"],
        ["08:15", "09:00", "09:30", "10:05", "10:45"],
        ["09:30", "10:15", "10:45", "11:20", "12:00"],
        ["10:45", "11:30", "12:00", "12:35", "13:15"],
        ["12:00", "12:45", "13:15", "13:50", "14:30"],
        ["13:15", "14:00", "14:30", "15:05", "15:45"],
        ["14:30", "15:15", "15:45", "16:20", "17:00"],
        ["15:45", "16:30", "17:00", "17:35", "18:15"],
        ["17:00", "17:45", "18:15", "18:50", "19:30"],
        ["18:00", "18:45", "19:15", "19:50", "20:30"],
      ],
      domingo: [
        ["05:30", "06:15", "06:45", "07:20", "08:00"],
        ["07:30", "08:15", "08:45", "09:20", "10:00"],
        ["09:30", "10:15", "10:45", "11:20", "12:00"],
        ["14:30", "15:15", "15:45", "16:20", "17:00"],
        ["16:15", "17:00", "17:30", "18:05", "18:45"],
        ["17:45", "18:30", "19:00", "19:35", "20:15"],
      ],
    },
    colunas: [
      "Saída de Preá",
      "Passa em Jijoca",
      "Passa em Parazinho",
      "Passa em Granja",
      "Chegada em Camocim",
    ],
  },
  {
    id: "camocim-prea",
    nome: "Camocim - Preá",
    preco: 29.75,
    horarios: {
      semana: [
        ["05:00", "05:40", "06:15", "06:45", "07:30"],
        ["06:00", "06:40", "07:15", "07:45", "08:30"],
        ["07:00", "07:40", "08:15", "08:45", "09:30"],
        ["08:15", "08:55", "09:30", "10:00", "10:45"],
        ["09:30", "10:10", "10:45", "11:15", "12:00"],
        ["10:45", "11:25", "12:00", "12:30", "13:15"],
        ["12:00", "12:40", "13:15", "13:45", "14:30"],
        ["13:15", "13:55", "14:30", "15:00", "15:45"],
        ["14:30", "15:10", "15:45", "16:15", "17:00"],
        ["15:45", "16:25", "17:00", "17:30", "18:15"],
        ["17:00", "17:40", "18:15", "18:45", "19:30"],
        ["18:00", "18:40", "19:15", "19:45", "20:30"],
      ],
      sabado: [
        ["05:00", "05:40", "06:15", "06:45", "07:30"],
        ["06:00", "06:40", "07:15", "07:45", "08:30"],
        ["07:00", "07:40", "08:15", "08:45", "09:30"],
        ["08:15", "08:55", "09:30", "10:00", "10:45"],
        ["09:30", "10:10", "10:45", "11:15", "12:00"],
        ["10:45", "11:25", "12:00", "12:30", "13:15"],
        ["12:00", "12:40", "13:15", "13:45", "14:30"],
        ["13:15", "13:55", "14:30", "15:00", "15:45"],
        ["14:30", "15:10", "15:45", "16:15", "17:00"],
        ["15:45", "16:25", "17:00", "17:30", "18:15"],
        ["17:00", "17:40", "18:15", "18:45", "19:30"],
        ["18:00", "18:40", "19:15", "19:45", "20:30"],
      ],
      domingo: [
        ["05:00", "05:40", "06:15", "06:45", "07:30"],
        ["07:00", "07:40", "08:15", "08:45", "09:30"],
        ["09:30", "10:10", "10:45", "11:15", "12:00"],
        ["12:00", "12:40", "13:15", "13:45", "14:30"],
        ["14:30", "15:10", "15:45", "16:15", "17:00"],
        ["17:00", "17:40", "18:15", "18:45", "19:30"],
      ],
    },
    colunas: [
      "Saída de Camocim",
      "Passa em Granja",
      "Passa em Parazinho",
      "Passa em Jijoca",
      "Chegada em Preá",
    ],
  },
  {
    id: "araras-camocim",
    nome: "Araras - Camocim",
    preco: 19.1,
    horarios: {
      semana: [["05:40", "06:00", "06:25", "07:05"]],
      sabado: [],
      domingo: [],
    },
    colunas: [
      "Saída de Chapada",
      "Passa em Araras",
      "Passa em Barroquinha",
      "Chegada em Camocim",
    ],
  },
  {
    id: "camocim-araras",
    nome: "Camocim - Araras",
    preco: 19.1,
    horarios: {
      semana: [["11:00", "11:40", "12:05", "12:25"]],
      sabado: [],
      domingo: [],
    },
    colunas: [
      "Saída de Camocim",
      "Passa em Barroquinha",
      "Passa em Araras",
      "Chegada em Chapada",
    ],
  },
  {
    id: "camocim-tiangua",
    nome: "Camocim - Tianguá",
    preco: 35.9,
    horarios: {
      semana: [
        ["05:45", "07:00", "08:20", "09:00"],
        ["10:05", "11:20", "12:40", "13:15"],
      ],
      sabado: [
        ["05:45", "07:00", "08:20", "09:00"],
        ["10:05", "11:20", "12:40", "13:15"],
      ],
      domingo: [],
    },
    colunas: [
      "Saída de Camocim",
      "Passa em Santa Terezinha",
      "Passa em Viçosa",
      "Chegada em Tianguá",
    ],
  },
  {
    id: "tiangua-camocim",
    nome: "Tianguá - Camocim",
    preco: 35.9,
    horarios: {
      semana: [
        ["06:00", "06:40", "07:50", "09:15"],
        ["15:00", "15:40", "16:50", "18:15"],
      ],
      sabado: [
        ["06:00", "06:40", "07:50", "09:15"],
        ["12:00", "12:40", "13:50", "15:15"],
      ],
      domingo: [],
    },
    colunas: [
      "Saída de Tianguá",
      "Passa em Viçosa",
      "Passa em Santa Terezinha",
      "Chegada em Camocim",
    ],
  },
  {
    id: "camocim-parnaiba",
    nome: "Camocim - Parnaiba",
    preco: 45,
    horarios: {
      semana: [["08:30", "10:30"]],
      sabado: [["08:30", "10:30"]],
      domingo: [],
    },
    colunas: ["Saída de Camocim", "Chegada em Parnaiba"],
  },
  {
    id: "parnaiba-camocim",
    nome: "Parnaiba - Camocim",
    preco: 45,
    horarios: {
      semana: [["12:30", "14:30"]],
      sabado: [["12:00", "14:00"]],
      domingo: [],
    },
    colunas: ["Saída de Parnaiba", "Chegada em Camocim"],
  },
];

const listaRotas = document.getElementById("lista-rotas");
const detalheRota = document.getElementById("detalhe-rota");
const tituloRota = document.getElementById("titulo-rota");
const tabelasRota = document.getElementById("tabelas-rota");
const btnVoltar = document.getElementById("voltar");
const btnVoltarBottom = document.getElementById("voltar-bottom");
const precoRota = document.getElementById("preco-rota"); // Adicionei um elemento para mostrar o preço

// Renderiza lista de rotas
rotas.forEach((rota) => {
  const itemRota = document.createElement("div");
  itemRota.className = "rota-item";

  const botao = document.createElement("button");
  botao.textContent = rota.nome;
  botao.onclick = () => mostrarDetalhes(rota);

  const preco = document.createElement("span");
  preco.className = "preco";
  preco.textContent = `R$ ${rota.preco.toFixed(2)}`;

  itemRota.appendChild(botao);
  itemRota.appendChild(preco);
  listaRotas.appendChild(itemRota);
});

function mostrarDetalhes(rota) {
  listaRotas.classList.add("hidden");
  detalheRota.classList.remove("hidden");
  tituloRota.innerHTML = `<h2>${rota.nome}</h2>`;
  precoRota.textContent = `Preço: R$ ${rota.preco.toFixed(2)}`; // Mostra o preço
  tabelasRota.innerHTML = "";

  for (let tipo in rota.horarios) {
    const horarios = rota.horarios[tipo];

    // Verificar se há horários
    if (horarios.length === 0) {
      const aviso = document.createElement("p");
      aviso.className = "aviso-sem-horario";
      aviso.innerHTML = `
  <svg width="20" height="20" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 8px;">
    <path fill="#ff8f00" d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8z"/>
  </svg>
  Não há horários registrados para ${
    tipo === "semana" ? "dias úteis" : tipo === "sabado" ? "sábado" : "domingo"
  }
`;
      tabelasRota.appendChild(aviso);
      continue;
    }

    const containerTabela = document.createElement("div");
    containerTabela.className = "tabela-container";

    const titulo = document.createElement("h3");
    titulo.textContent =
      tipo === "semana"
        ? "Segunda a Sexta"
        : tipo === "sabado"
        ? "Sábado"
        : "Domingo";
    containerTabela.appendChild(titulo);

    // Criar tabela
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Cabeçalho
    const trHead = document.createElement("tr");
    rota.colunas.forEach((col) => {
      const th = document.createElement("th");
      th.textContent = col;
      trHead.appendChild(th);
    });
    thead.appendChild(trHead);

    // Corpo
    horarios.forEach((linha) => {
      const trBody = document.createElement("tr");
      linha.forEach((item, index) => {
        const td = document.createElement("td");
        td.textContent = item;
        // Destaca a primeira e última coluna (saída e chegada)
        if (index === 0 || index === linha.length - 1) {
          td.className = index === 0 ? "saida" : "chegada";
        }
        trBody.appendChild(td);
      });
      tbody.appendChild(trBody);
    });

    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    containerTabela.appendChild(tabela);
    tabelasRota.appendChild(containerTabela);
  }
}

// Botão de voltar
btnVoltar.onclick = () => {
  detalheRota.classList.add("hidden");
  listaRotas.classList.remove("hidden");
};

btnVoltarBottom.onclick = () => {
  detalheRota.classList.add("hidden");
  listaRotas.classList.remove("hidden");
};

// Controle do Modal
const modal = document.getElementById("termsModal");
const btn = document.querySelector(".open-modal-btn");
const span = document.querySelector(".close-modal");

btn.onclick = function () {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Desabilita scroll
};

span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Habilita scroll
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// Função para copiar chave PIX
function copyPixKey() {
  const pixKey = document.getElementById("pixKey");
  const btn = document.querySelector(".copy-pix-btn");

  navigator.clipboard
    .writeText(pixKey.textContent)
    .then(() => {
      btn.classList.add("copied");
      btn.innerHTML =
        '<span class="tooltip">Copiado!<span class="tooltiptext">Chave PIX copiada</span></span>';

      setTimeout(() => {
        btn.classList.remove("copied");
        btn.innerHTML =
          '<span class="tooltip">Copiar chave PIX<span class="tooltiptext">Clique para copiar</span></span>';
      }, 2000);
    })
    .catch((err) => {
      console.error("Falha ao copiar: ", err);
      btn.innerHTML =
        '<span class="tooltip">Erro<span class="tooltiptext">Falha ao copiar</span></span>';
    });
}

// Relógio dinâmico
function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, "0");
  const minutos = agora.getMinutes().toString().padStart(2, "0");
  document.getElementById("clock").textContent = `${horas}:${minutos}`;
}

const slideshow = document.getElementById('patrocinador-100');
const imagens = ['./src/camocar-1.jpg', './src/camocar-2.jpg'];
imagens.forEach(img => {
    new Image().src = img; // Força o navegador a baixar cada imagem
});
let indice = 0;

function trocarImagem() {
    slideshow.style.opacity = 0; // Desaparece
    setTimeout(() => {
        indice = (indice + 1) % imagens.length;
        slideshow.src = imagens[indice];
        slideshow.style.opacity = 1; // Reaparece
    }, 500); // Tempo da transição (metade do intervalo)
}

setInterval(trocarImagem, 5000); // Troca a cada 1s

// Esconde o loader quando a página estiver totalmente carregada
window.addEventListener("load", function () {
  document.getElementById("simple-loader").style.display = "none";
});

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
