const seletor = document.querySelector(".resultado");
const saidaSemana = document.getElementById("saidaSemana");
const saidaSabado = document.getElementById("saidaSabado");
const chegadaSemana = document.getElementById("chegadaSemana");
const chegadaSabado = document.getElementById("chegadaSabado");
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
    valor: 14.50
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
    valor: 14.50
  },
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
    saidaSemana.innerHTML = "";
    chegadaSemana.innerHTML = "";
    saidaSabado.innerHTML = "";
    chegadaSabado.innerHTML = "";
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
      }
    });
  } else {
    seletor.classList.add("hide");
    return;
  }
}

optionHorarios();
// pegaHorario(item);
selectHorario.addEventListener("change", () => {
  let item = parseInt(selectHorario.value);
  pegaHorario(item);
});
