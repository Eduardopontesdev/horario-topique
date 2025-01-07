const seletor = document.querySelector(".resultado");
const patrocinio = document.querySelector(".patrocinio");
const domingo = document.querySelector(".domingo");
const saidaSemana = document.getElementById("saidaSemana");
const saidaSabado = document.getElementById("saidaSabado");
const saidaDomingo = document.getElementById("saidaDomingo");
const chegadaSemana = document.getElementById("chegadaSemana");
const chegadaSabado = document.getElementById("chegadaSabado");
const chegadaDomingo = document.getElementById("chegadaDomingo");
const rota = document.getElementById("rota");
const selectHorario = document.getElementById("listaHorarios");
const optionHorario = document.getElementById("option-horario");
const valor = document.getElementById("valor");
const topics = [
  {
    //chaval a camocim
    topic: 1,
    rota: "Chaval - Camocim",
    segundaasexta: {
      saida: ["06:00", "06:30", "07:00", "09:30", "11:40", "12:50"],
      chegada: ["07:00", "07:30", "08:00", "10:30", "12:40", "13:50"],
    },
    sabado: {
      saida: ["07:10"],
      chegada: ["08:10"],
    },
    valor: 14.50,
    domingo: {
     saida: [],
     chegada: [],
    }
  },
  //camocim a chaval
  {
    topic: 2,
    rota: "Camocim - Chaval",
    segundaasexta: {
      saida: ["07:50", "09:50", "10:50", "11:40", "14:30", "16:30"],
      chegada: ["08:50", "10:50", "11:50", "12:40", "15:30", "17:30"],
    },
    sabado: {
      saida: ["11:30"],
      chegada: ["12:30"],
    },
    valor: 14.50,
    domingo: {
      saida: [],
      chegada: [],
     }
  },
  //barroquinha a camocim
  {
    topic: 3,
    rota: "Barroquinha - Camocim",
    segundaasexta: {
      saida: ["05:40", "06:10", "06:40", "07:10", "08:10", "09:40", "10:30", "11:30", "12:50", "14:40", "16:50"],
      chegada: ["06:30", "07:00", "07:30", "08:00", "09:00", "10:30", "11:20", "12:20", "13:40", "15:30", "17:40"],
    },
    sabado: {
      saida: ["06:15", "07:15", "08:15", "10:30", "12:50", "16:50"],
      chegada: ["07:00", "08:00", "09:00", "11:20", "13:40", "17:40"],
    },
    valor: 10.90,
    domingo: {
      saida: ["07:10"],
      chegada: ["08:00"],
     }
  },
  //camocim a barroquinha
  {
    topic: 4,
    rota: "Camocim - Barroquinha",
    segundaasexta: {
      saida: ["07:10", "08:20", "08:50", "09:20", "10:20", "11:20", "12:10", "13:00", "14:00", "15:50", "18:00"],
      chegada: ["08:00", "09:30", "09:40", "10:10", "11:10", "12:10", "13:00", "13:50", "14:50", "16:40", "18:50"],
    },
    sabado: {
      saida: ["08:15", "09:40", "11:00", "12:50", "14:30", "18:00"],
      chegada: ["09:00", "10:30", "11:50", "13:40", "15:20", "18:50"],
    },
    valor: 10.90,
    domingo: {
      saida: ["09:30"],
      chegada: ["10:20"],
     }
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
    seletor.classList.remove("hide");
    topics.forEach((topic) => {
      if (topic.topic === item) {
        rota.innerHTML = topic.rota;
        valor.innerHTML = topic.valor.toLocaleString("pt-br", {style:'currency', currency: 'BRL'});
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
        if(topic.domingo.chegada.length != 0){
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
        }else {
          domingo.classList.add("hide");
        }
        
      }
    });
  } else {
    seletor.classList.add("hide");
    patrocinio.classList.remove("hide");
    return;
  }
}

optionHorarios();
// pegaHorario(item);
selectHorario.addEventListener("change", () => {
  let item = parseInt(selectHorario.value);
  pegaHorario(item);
});
