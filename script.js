const imgPatrocinador = document.getElementById("img-patrocinador");
const saidaRota = document.getElementById("saida-rota");
const saidaRotaS = document.getElementById("saida-rota-s");
const saidaRotaD = document.getElementById("saida-rota-d");
const chegadaRota = document.getElementById("chegada-rota");
const chegadaRotaS = document.getElementById("chegada-rota-s");
const chegadaRotaD = document.getElementById("chegada-rota-d");

const seletor = document.querySelector(".resultado");
const patrocinio = document.querySelector(".patrocinio");
const main = document.querySelector(".main");
const domingo = document.querySelector(".domingo");
const sabado = document.querySelector(".sabado");
//onde a topic ira passar / na rota adicional tambem
const passadaSemanaHide = document.querySelector(".passada-semana");
const passadaSemanaHide2 = document.querySelector(".passada-semana2");
const passadaSemanaHide3 = document.querySelector(".passada-semana3");
const passadaSemanaHide4 = document.querySelector(".passada-semana4");
// fim
//esconde ou mostra a lista de horarios se tiver disponivel
const passadaSabadoHide = document.querySelector(".passada-sabado");
const passadaSabadoHide2 = document.querySelector(".passada-sabado2");
const passadaSabadoHide3 = document.querySelector(".passada-sabado3");
const passadaSabadoHide4 = document.querySelector(".passada-sabado4");
//fim
const passadaDomingoHide = document.querySelector(".passada-domingo");
const passadaDomingoHide2 = document.querySelector(".passada-domingo2");
const passadaDomingoHide3 = document.querySelector(".passada-domingo3");
const passadaDomingoHide4 = document.querySelector(".passada-domingo4");
const saidaSemana = document.getElementById("saidaSemana");
const saidaSabado = document.getElementById("saidaSabado");
const saidaDomingo = document.getElementById("saidaDomingo");
const chegadaSemana = document.getElementById("chegadaSemana");
const chegadaSabado = document.getElementById("chegadaSabado");
const chegadaDomingo = document.getElementById("chegadaDomingo");
//valores que sera alterados se tiver os dados
const passadaSemana = document.getElementById("passadaSemana");
const passadaSemana2 = document.getElementById("passadaSemana2");
const passadaSemana3 = document.getElementById("passadaSemana3");
const passadaSemana4 = document.getElementById("passadaSemana4");
// fim
const passadaSabado = document.getElementById("passadaSabado");
const passadaSabado2 = document.getElementById("passadaSabado2");
const passadaSabado3 = document.getElementById("passadaSabado3");
const passadaSabado4 = document.getElementById("passadaSabado4");
const passadaDomingo = document.getElementById("passadaDomingo");
const passadaDomingo2 = document.getElementById("passadaDomingo2");
const passadaDomingo3 = document.getElementById("passadaDomingo3");
const passadaDomingo4 = document.getElementById("passadaDomingo4");
const passaCidade = document.getElementById("passaem");
const passaCidade2 = document.getElementById("passaem2");
const passaCidade3 = document.getElementById("passaem3");
const passaCidade4 = document.getElementById("passaem4");
const passaCidadeS = document.getElementById("passaemS");
const passaCidadeS2 = document.getElementById("passaemS2");
const passaCidadeS3 = document.getElementById("passaemS3");
const passaCidadeS4 = document.getElementById("passaemS4");
const passaCidadeD = document.getElementById("passaemD");
const passaCidadeD2 = document.getElementById("passaemD2");
const passaCidadeD3 = document.getElementById("passaemD3");
const passaCidadeD4 = document.getElementById("passaemD4");
const rota = document.getElementById("rota");
const selectHorario = document.getElementById("listaHorarios");
const optionHorario = document.getElementById("option-horario");
const valor = document.getElementById("valor");

const dataPatrocinio = [
  {
    nome: "topassageiros",
    plano: "exclusivo",
    datainicio: "22/01/2025",
    datafinal: "22/02/2025"
  }
]

const imagensPatrocinador = [
  "./src/patrocinador-1.png",
  "./src/patrocinador-2.png",
  "./src/patrocinador-3.png",
];

let imagemAtual = 0;

const topics = [
  {
    //granja a camocim
    topic: 1,
    rota: "Granja - Camocim",
    saidarota: "Granja",
    chegadarota: "Camocim",
    segundaasexta: {
      saida: [
        "05:45",
        "06:00",
        "06:20",
        "06:40",
        "07:00",
        "07:20",
        "07:40",
        "08:00",
        "08:20",
        "08:40",
        "09:00",
        "09:20",
        "09:40",
        "10:00",
        "10:20",
        "10:40",
        "11:00",
        "11:20",
        "11:40",
        "12:00",
        "12:25",
        "12:50",
        "13:15",
        "13:40",
        "14:05",
        "14:30",
        "14:55",
        "15:20",
        "15:45",
        "16:10",
        "16:35",
        "17:00",
        "17:25",
        "18:00",
      ],
      chegada: [
        "06:25",
        "06:40",
        "07:00",
        "07:20",
        "07:40",
        "08:00",
        "08:20",
        "08:40",
        "09:00",
        "09:20",
        "09:40",
        "10:00",
        "10:20",
        "10:40",
        "11:00",
        "11:20",
        "11:40",
        "12:00",
        "12:20",
        "12:40",
        "13:05",
        "13:30",
        "13:55",
        "14:20",
        "14:45",
        "15:10",
        "15:35",
        "16:00",
        "16:25",
        "16:50",
        "17:15",
        "17:40",
        "18:05",
        "18:40",
      ],
    },
    sabado: {
      saidarota: "Granja",
      chegadarota: "Camocim",
      saida: [],
      chegada: [],
    },
    valor: 7.25,
    domingo: {
      saidarota: "Granja",
      chegadarota: "Camocim",
      saida: [],
      chegada: [],
    },
    rotaadicional: {
      cidade1: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade2: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade3: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //fim granja a camocim
  //camocim a granja
  {
    topic: 2,
    rota: "Camocim - Granja",
    saidarota: "Camocim",
    chegadarota: "Granja",
    segundaasexta: {
      saida: [
        "06:30",
        "06:45",
        "07:05",
        "07:25",
        "07:45",
        "08:05",
        "08:25",
        "08:45",
        "09:05",
        "09:25",
        "09:45",
        "10:05",
        "10:25",
        "10:45",
        "11:05",
        "11:25",
        "11:45",
        "12:05",
        "12:25",
        "12:45",
        "13:10",
        "13:35",
        "14:00",
        "14:25",
        "14:50",
        "15:15",
        "15:40",
        "16:05",
        "16:30",
        "16:55",
        "17:20",
        "17:45",
        "18:10",
        "18:45",
      ],
      chegada: [
        "07:10",
        "07:25",
        "07:45",
        "08:05",
        "08:25",
        "08:45",
        "09:05",
        "09:25",
        "09:45",
        "10:05",
        "10:25",
        "10:45",
        "11:05",
        "11:25",
        "11:45",
        "12:05",
        "12:25",
        "12:45",
        "13:05",
        "13:25",
        "13:50",
        "14:15",
        "14:40",
        "15:05",
        "15:30",
        "15:55",
        "16:20",
        "16:45",
        "17:10",
        "17:35",
        "18:00",
        "18:25",
        "18:50",
        "19:25",
      ],
    },
    sabado: {
      saidarota: "Camocim",
      chegadarota: "Granja",
      saida: [],
      chegada: [],
    },
    valor: 7.25,
    domingo: {
      saidarota: "Camocim",
      chegadarota: "Granja",
      saida: [],
      chegada: [],
    },
    rotaadicional: {
      cidade1: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade2: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade3: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //fim camocim a granja
  //chaval a camocim
  {
    topic: 3,
    rota: "Chaval - Camocim",
    saidarota: "Chaval",
    chegadarota: "Camocim",
    segundaasexta: {
      saida: ["06:00", "06:30", "07:00", "09:30", "11:40", "12:50"],
      chegada: ["07:00", "07:30", "08:00", "10:30", "12:40", "13:50"],
    },
    sabado: {
      saidarota: "Chaval",
      chegadarota: "Camocim",
      saida: ["07:10"],
      chegada: ["08:10"],
    },
    valor: 14.5,
    domingo: {
      saidarota: "Chaval",
      chegadarota: "Camocim",
      saida: [],
      chegada: [],
    },
    rotaadicional: {
      cidade1: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade2: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade3: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //camocim a chaval
  {
    topic: 4,
    rota: "Camocim - Chaval",
    saidarota: "Camocim",
    chegadarota: "Chaval",
    segundaasexta: {
      saida: ["07:50", "09:50", "10:50", "11:40", "14:30", "16:30"],
      chegada: ["08:50", "10:50", "11:50", "12:40", "15:30", "17:30"],
    },
    sabado: {
      saidarota: "Camocim",
      chegadarota: "Chaval",
      saida: ["11:30"],
      chegada: ["12:30"],
    },
    valor: 14.5,
    domingo: {
      saidarota: "Camocim",
      chegadarota: "Chaval",
      saida: [],
      chegada: [],
    },
    rotaadicional: {
      cidade1: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade2: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade3: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //barroquinha a camocim
  {
    topic: 5,
    rota: "Barroquinha - Camocim",
    saidarota: "Barroquinha",
    chegadarota: "Camocim",
    segundaasexta: {
      saida: [
        "05:40",
        "06:10",
        "06:40",
        "07:10",
        "08:10",
        "09:40",
        "10:30",
        "11:30",
        "12:50",
        "14:40",
        "16:50",
      ],
      chegada: [
        "06:30",
        "07:00",
        "07:30",
        "08:00",
        "09:00",
        "10:30",
        "11:20",
        "12:20",
        "13:40",
        "15:30",
        "17:40",
      ],
    },
    sabado: {
      saidarota: "Barroquinha",
      chegadarota: "Camocim",
      saida: ["06:15", "07:15", "08:15", "10:30", "12:50", "16:50"],
      chegada: ["07:00", "08:00", "09:00", "11:20", "13:40", "17:40"],
    },
    valor: 10.9,
    domingo: {
      saidarota: "Barroquinha",
      chegadarota: "Camocim",
      saida: ["07:10"],
      chegada: ["08:00"],
    },
    rotaadicional: {
      cidade1: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade2: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade3: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //camocim a barroquinha
  {
    topic: 6,
    rota: "Camocim - Barroquinha",
    saidarota: "Camocim",
    chegadarota: "Barroquinha",
    segundaasexta: {
      saida: [
        "07:10",
        "08:20",
        "08:50",
        "09:20",
        "10:20",
        "11:20",
        "12:10",
        "13:00",
        "14:00",
        "15:50",
        "18:00",
      ],
      chegada: [
        "08:00",
        "09:30",
        "09:40",
        "10:10",
        "11:10",
        "12:10",
        "13:00",
        "13:50",
        "14:50",
        "16:40",
        "18:50",
      ],
    },
    sabado: {
      saidarota: "Camocim",
      chegadarota: "Barroquinha",
      saida: ["08:15", "09:40", "11:00", "12:50", "14:30", "18:00"],
      chegada: ["09:00", "10:30", "11:50", "13:40", "15:20", "18:50"],
    },
    valor: 10.9,
    domingo: {
      saidarota: "Camocim",
      chegadarota: "Barroquinha",
      saida: ["09:30"],
      chegada: ["10:20"],
    },
    rotaadicional: {
      cidade1: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade2: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade3: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //bitupita a camocim
  {
    topic: 7,
    rota: "Bitupitá - Camocim",
    saidarota: "Bitupitá",
    chegadarota: "Camocim",
    segundaasexta: {
      saida: ["05:40", "06:40", "07:10", "13:00"],
      chegada: ["06:55", "07:55", "08:20", "14:10"],
    },
    sabado: {
      saidarota: "Bitupitá",
      chegadarota: "Camocim",
      saida: ["06:40"],
      chegada: ["07:55"],
    },
    valor: 18.5,
    domingo: {
      saidarota: "Bitupitá",
      chegadarota: "Camocim",
      saida: [],
      chegada: [],
    },
    rotaadicional: {
      cidade1: {
        nome: "Barroquinha",
        passada: ["06:15", "07:15", "07:40", "13:30"],
        sabado: {
          passada: ["07:20"],
        },
        domingo: {
          passada: [],
        },
      },
      cidade2: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade3: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //camocim a bitupita
  {
    topic: 8,
    rota: "Camocim - Bitupitá",
    saidarota: "Camocim",
    chegadarota: "Bitupitá",
    segundaasexta: {
      saida: ["10:40", "11:30", "12:40", "16:10"],
      chegada: ["11:55", "12:45", "13:55", "17:55"],
    },
    sabado: {
      saidarota: "Camocim",
      chegadarota: "Bitupitá",
      saida: ["11:20"],
      chegada: ["12:40"],
    },
    valor: 18.5,
    domingo: {
      saidarota: "Camocim",
      chegadarota: "Bitupitá",
      saida: [],
      chegada: [],
    },
    rotaadicional: {
      cidade1: {
        nome: "Barroquinha",
        passada: ["11:20", "12:10", "13:20", "16:50"],
        sabado: {
          passada: ["12:00"],
        },
        domingo: {
          passada: [],
        },
      },
      cidade2: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade3: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //camocim a sobral
  {
    topic: 9,
    rota: "Camocim - Sobral",
    saidarota: "Camocim",
    chegadarota: "Sobral",
    segundaasexta: {
      saida: ["03:30", "05:00", "07:00", "09:00", "11:00", "13:00", "15:00"],
      chegada: ["06:00", "07:30", "09:30", "11:30", "13:30", "15:30", "17:30"],
    },
    sabado: {
      saidarota: "Camocim",
      chegadarota: "Sobral",
      saida: ["03:30", "05:00", "07:00", "09:00", "11:00", "13:00", "15:00"],
      chegada: ["06:00", "07:30", "09:30", "11:30", "13:30", "15:30", "17:30"],
    },
    valor: 36.95,
    domingo: {
      saidarota: "Camocim",
      chegadarota: "Sobral",
      saida: ["04:30", "07:00", "15:00"],
      chegada: ["07:00", "09:30", "17:30"],
    },
    rotaadicional: {
      cidade1: {
        nome: "Martinopole",
        passada: [
          "04:30",
          "06:00",
          "08:00",
          "10:00",
          "12:00",
          "14:00",
          "16:00",
        ],
        sabado: {
          passada: [
            "04:30",
            "06:00",
            "08:00",
            "10:00",
            "12:00",
            "14:00",
            "16:00",
          ],
        },
        domingo: {
          passada: ["05:30", "08:00", "16:00"],
        },
      },
      cidade2: {
        nome: "Uruoca",
        passada: [
          "05:00",
          "06:30",
          "08:30",
          "10:30",
          "12:30",
          "14:30",
          "16:30",
        ],
        sabado: {
          passada: [
            "05:00",
            "06:30",
            "08:30",
            "10:30",
            "12:30",
            "14:30",
            "16:30",
          ],
        },
        domingo: {
          passada: ["06:00", "08:30", "16:30"],
        },
      },
      cidade3: {
        nome: "Senador",
        passada: [
          "05:15",
          "06:45",
          "08:45",
          "10:45",
          "12:45",
          "14:45",
          "16:45",
        ],
        sabado: {
          passada: [
            "05:15",
            "06:45",
            "08:45",
            "10:45",
            "12:45",
            "14:45",
            "16:45",
          ],
        },
        domingo: {
          passada: ["06:15", "08:45", "16:45"],
        },
      },
      cidade4: {
        nome: "Massape",
        passada: [
          "05:30",
          "07:00",
          "09:00",
          "11:00",
          "13:00",
          "15:00",
          "17:00",
        ],
        sabado: {
          passada: [
            "05:30",
            "07:00",
            "09:00",
            "11:00",
            "13:00",
            "15:00",
            "17:00",
          ],
        },
        domingo: {
          passada: ["06:30", "09:00", "17:00"],
        },
      },
    },
  },
  //sobral a camocim
  {
    topic: 10,
    rota: "Sobral - Camocim",
    saidarota: "Sobral",
    chegadarota: "Camocim",
    segundaasexta: {
      saida: ["06:00", "08:00", "11:00", "13:00", "15:00", "17:00", "18:20"],
      chegada: ["08:30", "10:30", "13:30", "15:30", "17:30", "19:30", "20:50"],
    },
    sabado: {
      saidarota: "Sobral",
      chegadarota: "Camocim",
      saida: ["06:00", "08:00", "11:00", "13:00", "15:00", "17:00", "18:20"],
      chegada: ["08:30", "10:30", "13:30", "15:30", "17:30", "19:30", "20:50"],
    },
    valor: 36.95,
    domingo: {
      saidarota: "Sobral",
      chegadarota: "Camocim",
      saida: ["07:00", "11:00", "18:20"],
      chegada: ["09:30", "13:30", "20:50"],
    },
    rotaadicional: {
      cidade1: {
        nome: "Massape",
        passada: [
          "06:30",
          "08:30",
          "11:30",
          "13:30",
          "15:30",
          "17:30",
          "18:50",
        ],
        sabado: {
          passada: [
            "06:30",
            "08:30",
            "11:30",
            "13:30",
            "15:30",
            "17:30",
            "18:50",
          ],
        },
        domingo: {
          passada: ["07:30", "11:30", "18:50"],
        },
      },
      cidade2: {
        nome: "Senador",
        passada: [
          "06:45",
          "08:45",
          "11:45",
          "13:45",
          "15:45",
          "17:45",
          "19:05",
        ],
        sabado: {
          passada: [
            "06:45",
            "08:45",
            "11:45",
            "13:45",
            "15:45",
            "17:45",
            "19:05",
          ],
        },
        domingo: {
          passada: ["07:45", "11:45", "19:05"],
        },
      },
      cidade3: {
        nome: "Uruoca",
        passada: [
          "07:00",
          "09:00",
          "12:00",
          "14:00",
          "16:00",
          "18:00",
          "19:20",
        ],
        sabado: {
          passada: [
            "07:00",
            "09:00",
            "12:00",
            "14:00",
            "16:00",
            "18:00",
            "19:20",
          ],
        },
        domingo: {
          passada: ["08:00", "12:00", "19:20"],
        },
      },
      cidade4: {
        nome: "Martinopole",
        passada: [
          "07:30",
          "09:30",
          "12:30",
          "14:30",
          "16:30",
          "18:30",
          "19:50",
        ],
        sabado: {
          passada: [
            "07:30",
            "09:30",
            "12:30",
            "14:30",
            "16:30",
            "18:30",
            "19:50",
          ],
        },
        domingo: {
          passada: ["08:30", "12:30", "19:50"],
        },
      },
    },
  },
  //Preá a camocim
  {
    topic: 11,
    rota: "Preá - Camocim",
    saidarota: "Preá",
    chegadarota: "Camocim",
    segundaasexta: {
      saida: [
        "05:00",
        "06:00",
        "07:00",
        "08:15",
        "09:30",
        "10:45",
        "12:00",
        "13:15",
        "14:30",
        "15:45",
        "17:00",
        "18:00",
      ],
      chegada: [
        "07:30",
        "08:30",
        "09:30",
        "10:45",
        "12:00",
        "13:15",
        "14:30",
        "15:45",
        "17:00",
        "18:15",
        "19:30",
        "20:30",
      ],
    },
    sabado: {
      saidarota: "Preá",
      chegadarota: "Camocim",
      saida: [
        "05:00",
        "06:00",
        "07:00",
        "08:15",
        "09:30",
        "10:45",
        "12:00",
        "13:15",
        "14:30",
        "15:45",
        "17:00",
        "18:00",
      ],
      chegada: [
        "07:30",
        "08:30",
        "09:30",
        "10:45",
        "12:00",
        "13:15",
        "14:30",
        "15:45",
        "17:00",
        "18:15",
        "19:30",
        "20:30",
      ],
    },
    valor: 29,
    domingo: {
      saidarota: "Preá",
      chegadarota: "Camocim",
      saida: ["05:30", "07:30", "09:30", "14:30", "16:15", "17:45"],
      chegada: ["08:00", "10:00", "12:00", "17:00", "18:45", "20:15"],
    },
    rotaadicional: {
      cidade1: {
        nome: "Jijoca",
        passada: [
          "05:45",
          "06:45",
          "07:45",
          "09:00",
          "10:15",
          "11:30",
          "12:45",
          "14:00",
          "15:15",
          "16:30",
          "17:45",
          "18:45",
        ],
        sabado: {
          passada: [
            "05:45",
            "06:45",
            "07:45",
            "09:00",
            "10:15",
            "11:30",
            "12:45",
            "14:00",
            "15:15",
            "16:30",
            "17:45",
            "18:45",
          ],
        },
        domingo: {
          passada: ["06:15", "08:15", "10:15", "15:15", "17:00", "18:30"],
        },
      },
      cidade2: {
        nome: "Parazinho",
        passada: [
          "06:15",
          "07:15",
          "08:15",
          "09:30",
          "10:45",
          "12:00",
          "13:15",
          "14:30",
          "15:45",
          "17:00",
          "18:15",
          "19:15",
        ],
        sabado: {
          passada: [
            "06:15",
            "07:15",
            "08:15",
            "09:30",
            "10:45",
            "12:00",
            "13:15",
            "14:30",
            "15:45",
            "17:00",
            "18:15",
            "19:15",
          ],
        },
        domingo: {
          passada: ["06:45", "08:45", "10:45", "15:45", "17:30", "19:00"],
        },
      },
      cidade3: {
        nome: "Granja",
        passada: [
          "06:50",
          "07:50",
          "08:50",
          "10:05",
          "11:20",
          "12:35",
          "13:50",
          "15:05",
          "16:20",
          "17:35",
          "18:50",
          "19:50",
        ],
        sabado: {
          passada: [
            "06:50",
            "07:50",
            "08:50",
            "10:05",
            "11:20",
            "12:35",
            "13:50",
            "15:05",
            "16:20",
            "17:35",
            "18:50",
            "19:50",
          ],
        },
        domingo: {
          passada: ["07:20", "09:20", "11:20", "16:20", "18:05", "19:35"],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //camocim a preá
  {
    topic: 12,
    rota: "Camocim - Preá",
    saidarota: "Camocim",
    chegadarota: "Preá",
    segundaasexta: {
      saida: [
        "05:00",
        "06:00",
        "07:00",
        "08:15",
        "09:30",
        "10:45",
        "12:00",
        "13:15",
        "14:30",
        "15:45",
        "17:00",
        "18:00",
      ],
      chegada: [
        "07:30",
        "08:30",
        "09:30",
        "10:45",
        "12:00",
        "13:15",
        "14:30",
        "15:45",
        "17:00",
        "18:15",
        "19:30",
        "20:30",
      ],
    },
    sabado: {
      saidarota: "Camocim",
      chegadarota: "Preá",
      saida: [
        "05:00",
        "06:00",
        "07:00",
        "08:15",
        "09:30",
        "10:45",
        "12:00",
        "13:15",
        "14:30",
        "15:45",
        "17:00",
        "18:00",
      ],
      chegada: [
        "07:30",
        "08:30",
        "09:30",
        "10:45",
        "12:00",
        "13:15",
        "14:30",
        "15:45",
        "17:00",
        "18:15",
        "19:30",
        "20:30",
      ],
    },
    valor: 29,
    domingo: {
      saidarota: "Camocim",
      chegadarota: "Preá",
      saida: ["05:00", "07:00", "09:30", "12:00", "14:30", "17:00"],
      chegada: ["07:30", "09:30", "12:00", "14:30", "17:00", "19:30"],
    },
    rotaadicional: {
      cidade1: {
        nome: "Granja",
        passada: [
          "05:40",
          "06:40",
          "07:40",
          "08:55",
          "10:10",
          "11:25",
          "12:40",
          "13:55",
          "15:10",
          "16:25",
          "17:40",
          "18:40",
        ],
        sabado: {
          passada: [
            "05:40",
            "06:40",
            "07:40",
            "08:55",
            "10:10",
            "11:25",
            "12:40",
            "13:55",
            "15:10",
            "16:25",
            "17:40",
            "18:40",
          ],
        },
        domingo: {
          passada: ["05:40", "07:40", "10:10", "12:40", "15:10", "17:40"],
        },
      },
      cidade2: {
        nome: "Parazinho",
        passada: [
          "06:15",
          "07:15",
          "08:15",
          "09:30",
          "10:45",
          "12:00",
          "13:15",
          "14:30",
          "15:45",
          "17:00",
          "18:15",
          "19:15",
        ],
        sabado: {
          passada: [
            "06:15",
            "07:15",
            "08:15",
            "09:30",
            "10:45",
            "12:00",
            "13:15",
            "14:30",
            "15:45",
            "17:00",
            "18:15",
            "19:15",
          ],
        },
        domingo: {
          passada: ["06:15", "08:15", "10:45", "13:15", "15:45", "18:15"],
        },
      },
      cidade3: {
        nome: "Jijoca",
        passada: [
          "06:45",
          "07:45",
          "08:45",
          "10:00",
          "11:15",
          "12:30",
          "13:45",
          "15:00",
          "16:15",
          "17:30",
          "18:45",
          "19:45",
        ],
        sabado: {
          passada: [
            "06:45",
            "07:45",
            "08:45",
            "10:00",
            "11:15",
            "12:30",
            "13:45",
            "15:00",
            "16:15",
            "17:30",
            "18:45",
            "19:45",
          ],
        },
        domingo: {
          passada: ["06:45", "08:45", "11:15", "13:45", "16:15", "18:45"],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //outra rota
  //araras a camocim
  {
    topic: 13,
    rota: "Araras - Camocim",
    saidarota: "Chapada",
    chegadarota: "Camocim",
    segundaasexta: {
      saida: ["05:40"],
      chegada: ["07:05"],
    },
    sabado: {
      saidarota: "Araras",
      chegadarota: "Camocim",
      saida: [],
      chegada: [],
    },
    valor: 18.5,
    domingo: {
      saidarota: "Araras",
      chegadarota: "Camocim",
      saida: [],
      chegada: [],
    },
    rotaadicional: {
      cidade1: {
        nome: "Araras",
        passada: ["06:00"],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade2: {
        nome: "Barroquinha",
        passada: ["06:25"],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade3: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: ["06:45", "08:45", "11:15", "13:45", "16:15", "18:45"],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //camocim a araras
  {
    topic: 14,
    rota: "Camocim - Araras",
    saidarota: "Camocim",
    chegadarota: "Chapada",
    segundaasexta: {
      saida: ["11:00"],
      chegada: ["12:25"],
    },
    sabado: {
      saidarota: "Camocim",
      chegadarota: "Araras",
      saida: [],
      chegada: [],
    },
    valor: 18.5,
    domingo: {
      saidarota: "Camocim",
      chegadarota: "Araras",
      saida: [],
      chegada: [],
    },
    rotaadicional: {
      cidade1: {
        nome: "Barroquinha",
        passada: ["11:40"],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade2: {
        nome: "Araras",
        passada: ["12:05"],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade3: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: ["06:45", "08:45", "11:15", "13:45", "16:15", "18:45"],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //camocim a tiangua
  {
    topic: 15,
    rota: "Camocim - Tianguá",
    saidarota: "Camocim",
    chegadarota: "Tianguá",
    segundaasexta: {
      saida: ["05:45", "10:05"],
      chegada: ["09:00", "13:15"],
    },
    sabado: {
      saidarota: "Camocim",
      chegadarota: "Tianguá",
      saida: ["05:45", "10:05"],
      chegada: ["09:00", "13:15"],
    },
    valor: 34.8,
    domingo: {
      saidarota: "Camocim",
      chegadarota: "Tianguá",
      saida: [],
      chegada: [],
    },
    rotaadicional: {
      cidade1: {
        nome: "Santa Terezinha",
        passada: ["07:00", "11:20"],
        sabado: {
          passada: ["07:00", "11:20"],
        },
        domingo: {
          passada: [],
        },
      },
      cidade2: {
        nome: "Viçosa",
        passada: ["08:20", "12:40"],
        sabado: {
          passada: ["08:20", "12:40"],
        },
        domingo: {
          passada: [],
        },
      },
      cidade3: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //Tianguá a Camocicm
  {
    topic: 16,
    rota: "Tianguá - Camocim",
    saidarota: "Tianguá",
    chegadarota: "Camocim",
    segundaasexta: {
      saida: ["06:00", "15:00"],
      chegada: ["09:15", "18:15"],
    },
    sabado: {
      saidarota: "Tianguá",
      chegadarota: "Camocim",
      saida: ["06:00", "12:00"],
      chegada: ["09:15", "15:15"],
    },
    valor: 34.8,
    domingo: {
      saidarota: "Tianguá",
      chegadarota: "Camocim",
      saida: [],
      chegada: [],
    },
    rotaadicional: {
      cidade1: {
        nome: "Viçosa",
        passada: ["06:40", "15:40"],
        sabado: {
          passada: ["06:40", "12:40"],
        },
        domingo: {
          passada: [],
        },
      },
      cidade2: {
        nome: "Santa Terezinha",
        passada: ["07:50", "16:50"],
        sabado: {
          passada: ["07:50", "13:50"],
        },
        domingo: {
          passada: [],
        },
      },
      cidade3: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
      cidade4: {
        nome: "",
        passada: [],
        sabado: {
          passada: [],
        },
        domingo: {
          passada: [],
        },
      },
    },
  },
  //outra rota
];

function optionHorarios() {
  topics.forEach(function (topic) {
    const option = document.createElement("option");
    option.value = topic.topic;
    option.textContent = topic.rota;

    selectHorario.appendChild(option);
  });
}

function pegaHorario(item) {
  if (item != 0) {
    patrocinio.classList.add("hide");
    main.classList.remove("hide");
    saidaSemana.innerHTML = "";
    chegadaSemana.innerHTML = "";
    saidaSabado.innerHTML = "";
    chegadaSabado.innerHTML = "";
    saidaDomingo.innerHTML = "";
    chegadaDomingo.innerHTML = "";
    passadaSemana.innerHTML = "";
    passadaSemana2.innerHTML = "";
    passadaSemana3.innerHTML = "";
    passadaSemana4.innerHTML = "";
    passadaSabado.innerHTML = "";
    passadaSabado2.innerHTML = "";
    passadaSabado3.innerHTML = "";
    passadaSabado4.innerHTML = "";
    passadaDomingo.innerHTML = "";
    passadaDomingo2.innerHTML = "";
    passadaDomingo3.innerHTML = "";
    passadaDomingo4.innerHTML = "";
    seletor.classList.remove("hide");
    topics.forEach((topic, index) => {
      if (topic.topic === item) {
        // trata a rota e valor

        valor.innerHTML = topic.valor.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
        //fim do tratamento da rota e valor
        checarHorariosSemana(topic);

        if (topic.sabado.saida.length != 0) {
          checarHorariosSabado(topic);
        } else {
          sabado.classList.add("hide");
        }

        if (topic.domingo.chegada.length != 0) {
          checarHorariosDomingo(topic);
        } else {
          domingo.classList.add("hide");
        }
        //apartir daqui segue as rotas adicionais

        //verifica se existem roda adicional  da cidade 1 na semana

        if (topic.rotaadicional.cidade1.passada.length != 0) {
          checaRotaAdicional(
            passadaSemanaHide,
            passaCidade,
            passadaSemana,
            topic.rotaadicional.cidade1
          );
        } else {
          passadaSemanaHide.classList.add("hide");
        }

        //verifica se existem roda adicional da cidade 1 no sabado
        if (topic.rotaadicional.cidade1.sabado.passada.length != 0) {
          checaRotaAdicionalSabado(
            passadaSabadoHide,
            passaCidadeS,
            passadaSabado,
            topic.rotaadicional.cidade1
          );
        } else {
          passadaSabadoHide.classList.add("hide");
        }
        //verifica se existem roda adicional da cidade 1 no domingo
        if (topic.rotaadicional.cidade1.domingo.passada.length != 0) {
          checaRotaAdicionalDomingo(
            passadaDomingoHide,
            passaCidadeD,
            passadaDomingo,
            topic.rotaadicional.cidade1
          );
        } else {
          passadaDomingoHide.classList.add("hide");
        }
        //fim da rota adicional cidade  1
        //separador
        //verifica se existem roda adicional  da cidade 2 na semana
        if (topic.rotaadicional.cidade2.passada.length != 0) {
          checaRotaAdicional(
            passadaSemanaHide2,
            passaCidade2,
            passadaSemana2,
            topic.rotaadicional.cidade2
          );
        } else {
          passadaSemanaHide2.classList.add("hide");
        }
        //verifica se existem roda adicional da cidade 2 no sabado
        if (topic.rotaadicional.cidade2.sabado.passada.length != 0) {
          checaRotaAdicionalSabado(
            passadaSabadoHide2,
            passaCidadeS2,
            passadaSabado2,
            topic.rotaadicional.cidade2
          );
        } else {
          passadaSabadoHide2.classList.add("hide");
        }
        //verifica se existem roda adicional da cidade 2 no domingo
        if (topic.rotaadicional.cidade2.domingo.passada.length != 0) {
          checaRotaAdicionalDomingo(
            passadaDomingoHide2,
            passaCidadeD2,
            passadaDomingo2,
            topic.rotaadicional.cidade2
          );
        } else {
          passadaDomingoHide2.classList.add("hide");
        }
        //fim da rota adicional cidade  2
        //separador
        //verifica se existem roda adicional  da cidade 3 na semana
        if (topic.rotaadicional.cidade3.passada.length != 0) {
          checaRotaAdicional(
            passadaSemanaHide3,
            passaCidade3,
            passadaSemana3,
            topic.rotaadicional.cidade3
          );
        } else {
          passadaSemanaHide3.classList.add("hide");
        }
        //verifica se existem roda adicional da cidade 3 no sabado
        if (topic.rotaadicional.cidade3.sabado.passada.length != 0) {
          checaRotaAdicionalSabado(
            passadaSabadoHide3,
            passaCidadeS3,
            passadaSabado3,
            topic.rotaadicional.cidade3
          );
        } else {
          passadaSabadoHide3.classList.add("hide");
        }
        //verifica se existem roda adicional da cidade 3 no domingo
        if (topic.rotaadicional.cidade3.domingo.passada.length != 0) {
          checaRotaAdicionalDomingo(
            passadaDomingoHide3,
            passaCidadeD3,
            passadaDomingo3,
            topic.rotaadicional.cidade3
          );
        } else {
          passadaDomingoHide3.classList.add("hide");
        }
        //fim da rota adicional cidade  3
        //separador
        //verifica se existem roda adicional  da cidade 4 na semana
        if (topic.rotaadicional.cidade4.passada.length != 0) {
          checaRotaAdicional(
            passadaSemanaHide4,
            passaCidade4,
            passadaSemana4,
            topic.rotaadicional.cidade4
          );
        } else {
          passadaSemanaHide4.classList.add("hide");
        }
        //verifica se existem roda adicional da cidade 4 no sabado
        if (topic.rotaadicional.cidade4.sabado.passada.length != 0) {
          checaRotaAdicionalSabado(
            passadaSabadoHide4,
            passaCidadeS4,
            passadaSabado4,
            topic.rotaadicional.cidade4
          );
        } else {
          passadaSabadoHide4.classList.add("hide");
        }
        //verifica se existem roda adicional da cidade 4 no domingo
        if (topic.rotaadicional.cidade4.domingo.passada.length != 0) {
          checaRotaAdicionalDomingo(
            passadaDomingoHide4,
            passaCidadeD4,
            passadaDomingo4,
            topic.rotaadicional.cidade4
          );
        } else {
          passadaDomingoHide4.classList.add("hide");
        }
        //fim da rota adicional cidade  4
        //separador
      }
    });
  } else {
    seletor.classList.add("hide");
    patrocinio.classList.remove("hide");
    main.classList.add("hide");
  }
}

optionHorarios();

selectHorario.addEventListener("change", () => {
  let item = parseInt(selectHorario.value);
  pegaHorario(item);
});

//função para prencher a tabela com os horarios
//o argumento é a variavel da tag que manipula o dia
//o argumento dia é o campo da lista referente a semana, sabado ou odmingo
function checarHorariosSemana(topic) {
  saidaRota.innerHTML = topic.saidarota;
  chegadaRota.innerHTML = topic.chegadarota;
  for (let i = 0; i < topic.segundaasexta.saida.length; i++) {
    const span = document.createElement("li");
    span.className = "saida-dia";
    span.innerHTML = topic.segundaasexta.saida[i];
    saidaSemana.appendChild(span);
  }
  for (let i = 0; i < topic.segundaasexta.chegada.length; i++) {
    const span = document.createElement("li");
    span.className = "chegada-dia";
    span.innerHTML = topic.segundaasexta.chegada[i];
    chegadaSemana.appendChild(span);
  }
}

function checarHorariosSabado(topic) {
  console.log(topic);
  saidaRotaS.innerHTML = topic.saidarota;
  chegadaRotaS.innerHTML = topic.chegadarota;
  sabado.classList.remove("hide");
  for (let i = 0; i < topic.sabado.saida.length; i++) {
    const span = document.createElement("li");
    span.className = "saida-dia";
    span.innerHTML = topic.sabado.saida[i];
    saidaSabado.appendChild(span);
  }
  for (let i = 0; i < topic.sabado.chegada.length; i++) {
    const span = document.createElement("li");
    span.className = "chegada-dia";
    span.innerHTML = topic.sabado.chegada[i];
    chegadaSabado.appendChild(span);
  }
}

function checarHorariosDomingo(topic) {
  saidaRotaD.innerHTML = topic.saidarota;
  chegadaRotaD.innerHTML = topic.chegadarota;
  domingo.classList.remove("hide");
  for (let i = 0; i < topic.domingo.saida.length; i++) {
    const span = document.createElement("li");
    span.className = "saida-dia";
    span.innerHTML = topic.domingo.saida[i];
    saidaDomingo.appendChild(span);
  }
  for (let i = 0; i < topic.domingo.chegada.length; i++) {
    const span = document.createElement("li");
    span.className = "chegada-dia";
    span.innerHTML = topic.domingo.chegada[i];
    chegadaDomingo.appendChild(span);
  }
}

function checaRotaAdicional(dado1, dado2, dado3, topic) {
  dado1.classList.remove("hide");
  dado2.innerHTML = topic.nome;
  for (let i = 0; i < topic.passada.length; i++) {
    const span = document.createElement("li");
    span.className = "saida-dia";
    span.innerHTML = topic.passada[i];
    dado3.appendChild(span);
  }
}
function checaRotaAdicionalSabado(dado1, dado2, dado3, topic) {
  dado1.classList.remove("hide");
  dado2.innerHTML = topic.nome;
  for (let i = 0; i < topic.sabado.passada.length; i++) {
    const span = document.createElement("li");
    span.className = "saida-dia";
    span.innerHTML = topic.sabado.passada[i];
    dado3.appendChild(span);
  }
}
function checaRotaAdicionalDomingo(dado1, dado2, dado3, topic) {
  dado1.classList.remove("hide");
  dado2.innerHTML = topic.nome;
  for (let i = 0; i < topic.domingo.passada.length; i++) {
    const span = document.createElement("li");
    span.className = "saida-dia";
    span.innerHTML = topic.domingo.passada[i];
    dado3.appendChild(span);
  }
}

//enviar contato no whatsapp
function enviaMensagem() {
  const texto = "olá, tenho interesse em patrocinar o projeto.";
  const fone = "+5588996328842";
  const message = encodeURIComponent(texto);

  window.open(`https://wa.me/${fone}?text=${message}`, "_blank");
}

function mudaImagem() {
  imgPatrocinador.src = imagensPatrocinador[imagemAtual];
  imagemAtual = (imagemAtual + 1) % imagensPatrocinador.length;
}

setInterval(mudaImagem, 8000);
