const seletor = document.querySelector(".resultado");
const patrocinio = document.querySelector(".patrocinio");
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

const topics = [
  {
    //granja a camocim
    topic: 1,
    rota: "Granja - Camocim",
    segundaasexta: {
      saida: ["05:45", "06:00", "06:20", "06:40", "07:00", "07:20", "07:40", "08:00", "08:20", "08:40", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:25", "12:50", "13:15", "13:40", "14:05", "14:30", "14:55", "15:20", "15:45", "16:10", "16:35", "17:00", "17:25", "18:00", ],
      chegada: ["06:25", "06:40", "07:00", "07:20", "07:40", "08:00", "08:20", "08:40", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:05", "13:30", "13:55", "14:20", "14:45", "15:10", "15:35", "16:00", "16:25", "16:50", "17:15", "17:40", "18:05", "18:40", ],
    },
    sabado: {
      saida: [],
      chegada: [],
    },
    valor: 7.25,
    domingo: {
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
  segundaasexta: {
    saida: ["06:30", "06:45", "07:05", "07:25", "07:45", "08:05", "08:25", "08:45", "09:05", "09:25", "09:45", "10:05", "10:25", "10:45", "11:05", "11:25", "11:45", "12:05", "12:25", "12:45", "13:10", "13:35", "14:00", "14:25", "14:50", "15:15", "15:40", "16:05", "16:30", "16:55", "17:20", "17:45", "18:10", "18:45", ],
    chegada: ["07:10", "07:25", "07:45", "08:05", "08:25", "08:45", "09:05", "09:25", "09:45", "10:05", "10:25", "10:45", "11:05", "11:25", "11:45", "12:05", "12:25", "12:45", "13:05", "13:25", "13:50", "14:15", "14:40", "15:05", "15:30", "15:55", "16:20", "16:45", "17:10", "17:35", "18:00", "18:25", "18:50", "19:25"],
  },
  sabado: {
    saida: [],
    chegada: [],
  },
  valor: 7.25,
  domingo: {
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
    segundaasexta: {
      saida: ["06:00", "06:30", "07:00", "09:30", "11:40", "12:50"],
      chegada: ["07:00", "07:30", "08:00", "10:30", "12:40", "13:50"],
    },
    sabado: {
      saida: ["07:10"],
      chegada: ["08:10"],
    },
    valor: 14.5,
    domingo: {
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
    segundaasexta: {
      saida: ["07:50", "09:50", "10:50", "11:40", "14:30", "16:30"],
      chegada: ["08:50", "10:50", "11:50", "12:40", "15:30", "17:30"],
    },
    sabado: {
      saida: ["11:30"],
      chegada: ["12:30"],
    },
    valor: 14.5,
    domingo: {
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
      saida: ["06:15", "07:15", "08:15", "10:30", "12:50", "16:50"],
      chegada: ["07:00", "08:00", "09:00", "11:20", "13:40", "17:40"],
    },
    valor: 10.9,
    domingo: {
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
      saida: ["08:15", "09:40", "11:00", "12:50", "14:30", "18:00"],
      chegada: ["09:00", "10:30", "11:50", "13:40", "15:20", "18:50"],
    },
    valor: 10.9,
    domingo: {
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
    segundaasexta: {
      saida: ["05:40", "06:40", "07:10", "13:00"],
      chegada: ["06:55", "07:55", "08:20", "14:10"],
    },
    sabado: {
      saida: ["06:40"],
      chegada: ["07:55"],
    },
    valor: 18.5,
    domingo: {
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
    segundaasexta: {
      saida: ["10:40", "11:30", "12:40", "16:10"],
      chegada: ["11:55", "12:45", "13:55", "17:55"],
    },
    sabado: {
      saida: ["11:20"],
      chegada: ["12:40"],
    },
    valor: 18.5,
    domingo: {
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
      segundaasexta: {
        saida: ["03:30", "05:00", "07:00", "09:00", "11:00", "13:00", "15:00"],
        chegada: ["06:00", "07:30", "09:30", "11:30", "13:30", "15:30", "17:30"],
      },
      sabado: {
        saida: ["03:30", "05:00", "07:00", "09:00", "11:00", "13:00", "15:00"],
        chegada: ["06:00", "07:30", "09:30", "11:30", "13:30", "15:30", "17:30"],
      },
      valor: 36.95,
      domingo: {
        saida: ["04:30", "07:00", "15:00"],
        chegada: ["07:00", "09:30", "17:30"],
      },
      rotaadicional: {
        cidade1: {
          nome: "Martinopole",
          passada: ["04:30", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00"],
          sabado: {
            passada: ["04:30", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00"],
          },
          domingo: {
            passada: ["05:30", "08:00", "16:00"],
          },
        },
        cidade2: {
          nome: "Uruoca",
          passada: ["05:00", "06:30", "08:30", "10:30", "12:30", "14:30", "16:30"],
          sabado: {
            passada: ["05:00", "06:30", "08:30", "10:30", "12:30", "14:30", "16:30"],
          },
          domingo: {
            passada: ["06:00", "08:30", "16:30"],
          },
        },
        cidade3: {
          nome: "Senador",
          passada: ["05:15", "06:45", "08:45", "10:45", "12:45", "14:45", "16:45"],
          sabado: {
            passada: ["05:15", "06:45", "08:45", "10:45", "12:45", "14:45", "16:45"],
          },
          domingo: {
            passada: ["06:15", "08:45", "16:45"],
          },
        },
        cidade4: {
          nome: "Massape",
          passada: ["05:30", "07:00", "09:00", "11:00", "13:00", "15:00", "17:00"],
          sabado: {
            passada: ["05:30", "07:00", "09:00", "11:00", "13:00", "15:00", "17:00"],
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
    segundaasexta: {
      saida: ["06:00", "08:00", "11:00", "13:00", "15:00", "17:00", "18:20"],
      chegada: ["08:30", "10:30", "13:30", "15:30", "17:30", "19:30", "20:50"],
    },
    sabado: {
      saida: ["06:00", "08:00", "11:00", "13:00", "15:00", "17:00", "18:20"],
      chegada: ["08:30", "10:30", "13:30", "15:30", "17:30", "19:30", "20:50"],
    },
    valor: 36.95,
    domingo: {
      saida: ["07:00", "11:00", "18:20"],
      chegada: ["09:30", "13:30", "20:50"],
    },
    rotaadicional: {
      cidade1: {
        nome: "Massape",
        passada: ["06:30", "08:30", "11:30", "13:30", "15:30", "17:30", "18:50"],
        sabado: {
          passada: ["06:30", "08:30", "11:30", "13:30", "15:30", "17:30", "18:50"],
        },
        domingo: {
          passada: ["07:30", "11:30", "18:50"],
        },
      },
      cidade2: {
        nome: "Senador",
        passada: ["06:45", "08:45", "11:45", "13:45", "15:45", "17:45", "19:05"],
        sabado: {
          passada: ["06:45", "08:45", "11:45", "13:45", "15:45", "17:45", "19:05"],
        },
        domingo: {
          passada: ["07:45", "11:45", "19:05"],
        },
      },
      cidade3: {
        nome: "Uruoca",
        passada: ["07:00", "09:00", "12:00", "14:00", "16:00", "18:00", "19:20"],
        sabado: {
          passada: ["07:00", "09:00", "12:00", "14:00", "16:00", "18:00", "19:20"],
        },
        domingo: {
          passada: ["08:00", "12:00", "19:20"],
        },
      },
      cidade4: {
        nome: "Martinopole",
        passada: ["07:30", "09:30", "12:30", "14:30", "16:30", "18:30", "19:50"],
        sabado: {
          passada: ["07:30", "09:30", "12:30", "14:30", "16:30", "18:30", "19:50"],
        },
        domingo: {
          passada: ["08:30", "12:30", "19:50"],
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
    topics.forEach((topic) => {
      if (topic.topic === item) {
        rota.innerHTML = topic.rota;
        valor.innerHTML = topic.valor.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
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
if (topic.sabado.saida.length != 0) {
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
} else {
  sabado.classList.add("hide");
}
        
        if (topic.domingo.chegada.length != 0) {
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
        } else {
          domingo.classList.add("hide");
        }
        //apartir daqui segue as rotas adicionais
    
        //verifica se existem roda adicional  da cidade 1 na semana
        if (topic.rotaadicional.cidade1.passada.length != 0) {
          passadaSemanaHide.classList.remove("hide");
          passaCidade.innerHTML = topic.rotaadicional.cidade1.nome;
          for (let i = 0; i < topic.rotaadicional.cidade1.passada.length; i++)    { 
            const span = document.createElement("li");
            span.className = "saida-dia";
            span.innerHTML = topic.rotaadicional.cidade1.passada[i];
            

            passadaSemana.appendChild(span);
          }
          } else {
          
          passadaSemanaHide.classList.add("hide");
        }
        //verifica se existem roda adicional da cidade 1 no sabado
        if (topic.rotaadicional.cidade1.sabado.passada.length != 0) {
          passadaSabadoHide.classList.remove("hide");
          passaCidadeS.innerHTML = topic.rotaadicional.cidade1.nome;
          
          
          for (
            let i = 0;
            i < topic.rotaadicional.cidade1.sabado.passada.length;
            i++
          ) {
            const span = document.createElement("li");
            span.className = "saida-dia";
            span.innerHTML = topic.rotaadicional.cidade1.sabado.passada[i];
            

            passadaSabado.appendChild(span);
          }
        } else {
          passadaSabadoHide.classList.add("hide");
        }
 //verifica se existem roda adicional da cidade 1 no domingo
        if (topic.rotaadicional.cidade1.domingo.passada.length != 0) {
          passadaDomingoHide.classList.remove("hide");
          passaCidadeD.innerHTML = topic.rotaadicional.cidade1.nome;
          for (let i = 0; i < topic.rotaadicional.cidade1.domingo.passada.length; i++) {
            const span = document.createElement("li");
            span.className = "saida-dia";
            span.innerHTML = topic.rotaadicional.cidade1.domingo.passada[i];

            passadaDomingo.appendChild(span);
          }
        } else {
          passadaDomingoHide.classList.add("hide");
        }
        //fim da rota adicional cidade  1
        //separador
           //verifica se existem roda adicional  da cidade 2 na semana
           if (topic.rotaadicional.cidade2.passada.length != 0) {
            passadaSemanaHide2.classList.remove("hide");
            passaCidade2.innerHTML = topic.rotaadicional.cidade2.nome;
            for (let i = 0; i < topic.rotaadicional.cidade2.passada.length; i++)    { 
              const span = document.createElement("li");
              span.className = "saida-dia";
              span.innerHTML = topic.rotaadicional.cidade2.passada[i];
              
  
              passadaSemana2.appendChild(span);
            }
            } else {
            
            passadaSemanaHide2.classList.add("hide");
          }
          //verifica se existem roda adicional da cidade 2 no sabado
          if (topic.rotaadicional.cidade2.sabado.passada.length != 0) {
            passadaSabadoHide2.classList.remove("hide");
            passaCidadeS2.innerHTML = topic.rotaadicional.cidade2.nome;
            
            
            for (
              let i = 0;
              i < topic.rotaadicional.cidade2.sabado.passada.length;
              i++
            ) {
              const span = document.createElement("li");
              span.className = "saida-dia";
              span.innerHTML = topic.rotaadicional.cidade2.sabado.passada[i];
            
  
              passadaSabado2.appendChild(span);
            }
          } else {
            passadaSabadoHide2.classList.add("hide");
          }
   //verifica se existem roda adicional da cidade 2 no domingo
          if (topic.rotaadicional.cidade2.domingo.passada.length != 0) {
            passadaDomingoHide2.classList.remove("hide");
            passaCidadeD2.innerHTML = topic.rotaadicional.cidade2.nome;
            for (let i = 0; i < topic.rotaadicional.cidade2.domingo.passada.length; i++) {
              const span = document.createElement("li");
              span.className = "saida-dia";
              span.innerHTML = topic.rotaadicional.cidade2.domingo.passada[i];
  
              passadaDomingo2.appendChild(span);
            }
          } else {
            passadaDomingoHide2.classList.add("hide");
          }
          //fim da rota adicional cidade  2
          //separador
          //verifica se existem roda adicional  da cidade 3 na semana
          if (topic.rotaadicional.cidade3.passada.length != 0) {
            passadaSemanaHide3.classList.remove("hide");
            passaCidade3.innerHTML = topic.rotaadicional.cidade3.nome;
            for (let i = 0; i < topic.rotaadicional.cidade3.passada.length; i++)    { 
              const span = document.createElement("li");
              span.className = "saida-dia";
              span.innerHTML = topic.rotaadicional.cidade3.passada[i];
              
  
              passadaSemana3.appendChild(span);
            }
            } else {
            
            passadaSemanaHide3.classList.add("hide");
          }
          //verifica se existem roda adicional da cidade 3 no sabado
          if (topic.rotaadicional.cidade3.sabado.passada.length != 0) {
            passadaSabadoHide3.classList.remove("hide");
            passaCidadeS3.innerHTML = topic.rotaadicional.cidade3.nome;
            
            
            for (
              let i = 0;
              i < topic.rotaadicional.cidade3.sabado.passada.length;
              i++
            ) {
              const span = document.createElement("li");
              span.className = "saida-dia";
              span.innerHTML = topic.rotaadicional.cidade3.sabado.passada[i];
            
  
              passadaSabado3.appendChild(span);
            }
          } else {
            passadaSabadoHide3.classList.add("hide");
          }
   //verifica se existem roda adicional da cidade 3 no domingo
          if (topic.rotaadicional.cidade3.domingo.passada.length != 0) {
            passadaDomingoHide3.classList.remove("hide");
            passaCidadeD3.innerHTML = topic.rotaadicional.cidade3.nome;
            for (let i = 0; i < topic.rotaadicional.cidade3.domingo.passada.length; i++) {
              const span = document.createElement("li");
              span.className = "saida-dia";
              span.innerHTML = topic.rotaadicional.cidade3.domingo.passada[i];
  
              passadaDomingo3.appendChild(span);
            }
          } else {
            passadaDomingoHide3.classList.add("hide");
          }
          //fim da rota adicional cidade  3
          //separador
          //verifica se existem roda adicional  da cidade 4 na semana
          if (topic.rotaadicional.cidade4.passada.length != 0) {
            passadaSemanaHide4.classList.remove("hide");
            passaCidade4.innerHTML = topic.rotaadicional.cidade4.nome;
            for (let i = 0; i < topic.rotaadicional.cidade4.passada.length; i++)    { 
              const span = document.createElement("li");
              span.className = "saida-dia";
              span.innerHTML = topic.rotaadicional.cidade4.passada[i];
              
  
              passadaSemana4.appendChild(span);
            }
            } else {
            
            passadaSemanaHide4.classList.add("hide");
          }
          //verifica se existem roda adicional da cidade 4 no sabado
          if (topic.rotaadicional.cidade4.sabado.passada.length != 0) {
            passadaSabadoHide4.classList.remove("hide");
            passaCidadeS4.innerHTML = topic.rotaadicional.cidade4.nome;
            
            
            for (
              let i = 0;
              i < topic.rotaadicional.cidade4.sabado.passada.length;
              i++
            ) {
              const span = document.createElement("li");
              span.className = "saida-dia";
              span.innerHTML = topic.rotaadicional.cidade4.sabado.passada[i];
            
  
              passadaSabado4.appendChild(span);
            }
          } else {
            passadaSabadoHide4.classList.add("hide");
          }
   //verifica se existem roda adicional da cidade 4 no domingo
          if (topic.rotaadicional.cidade4.domingo.passada.length != 0) {
            passadaDomingoHide4.classList.remove("hide");
            passaCidadeD4.innerHTML = topic.rotaadicional.cidade4.nome;
            for (let i = 0; i < topic.rotaadicional.cidade4.domingo.passada.length; i++) {
              const span = document.createElement("li");
              span.className = "saida-dia";
              span.innerHTML = topic.rotaadicional.cidade4.domingo.passada[i];
  
              passadaDomingo4.appendChild(span);
            }
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
  }
}

optionHorarios();
// pegaHorario(item);
selectHorario.addEventListener("change", ()=> {
  let item = parseInt(selectHorario.value);
  pegaHorario(item);
});