// Fetch Json from data.json = Récupérer Json à partir de data.json
const data = fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    
    return data;
  })
  .catch((error) => console.log(error));


// Convert data into array = Convertir les données en tableau
let chartContainer = document.querySelector(".chart-container");

// Map through data and populate chart = Cartographiez les données et  je remplis le graphique
data.then((data) => {  
  console.log(data);
  data.forEach((item) => {
    let chart = document.createElement("div");
    console.log(item.amount);
    chart.classList.add("chart");
    const height = item.amount / 7;
    let value = "item";
    if (item.day == "wed") {
      value = `<div class="chart-value active" style="--height:${height}em"></div>`;
    } else {
      value = `<div class="chart-value" style="--height:${height}em"></div>`;
    }
    chart.innerHTML = `
        <div class="chart-wrapper">
        <div class="tooltip" style="display:none">${item.amount}</div>
        ${value}
        </div>
        <div class="chart-title">${item.day}</div>
        `;
    chartContainer.appendChild(chart);

    // Add tooltip functionality = Ajouter la fonctionnalité d'info-bulle
    let charts = document.querySelectorAll(".chart-wrapper");
    let tooltips = document.querySelectorAll(".tooltip");
    console.log(tooltips);
    for(let i = 0; i < tooltips.length ; i++){
    charts[i].addEventListener("mouseover", () => {
      tooltips[i].style.display = "block";
    });
   
    charts[i].addEventListener("mouseleave", () => {
      tooltips[i].style.display = "none";
    });
  }

    
  });
});
