const launches = document.getElementById("launches");
const today = document.getElementById("today-in-space");
const planets = document.getElementById("planets");
const sections = document.querySelectorAll(".app-section");
const nav = document.querySelectorAll(".nav-link");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const planet=document.querySelectorAll(".planet-card");
const Planet_Details=document.getElementById("planet-detail-name");
const description =document.getElementById("planet-detail-description");
const image=document.getElementById("planet-detail-image");
const distance=document.getElementById("planet-distance");
const radius=document.getElementById("planet-radius");
const mass=document.getElementById("planet-mass");
 const density=document.getElementById("planet-density");
 const orbital =document.getElementById("planet-orbital-period");
 const rotation =document.getElementById("planet-rotation");
let dataPlants = [];
async function getposts() {
  var response = await fetch(
    " https://solar-system-opendata-proxy.vercel.app/api/planets"
  );
  var data = await response.json();
 dataPlants =  data.bodies.sort((a, b) => a.semimajorAxis - b.semimajorAxis);
}
getposts();

function showPlanet(index) {
Planet_Details.textContent=dataPlants[index].englishName;
description.textContent=dataPlants[index].description;
image.src=dataPlants[index].image;
distance.textContent=dataPlants[index].semimajorAxis.toPrecision(2)/1000+"M km";
radius.textContent=dataPlants[index].meanRadius.toFixed(1)+"km";
mass.textContent=dataPlants[index].mass.massValue.toFixed(2)+"*10^"+dataPlants[index].mass.massExponent+"kg";
density.textContent=dataPlants[index].density.toFixed(2)+"g/cm³";

}


async function get(date = "") {
  const key = "TcPwfhffHPwNwtG6zfgzd6HkfPPkmgRJccWchHDB";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}` + (date ? `&date=${date}` : "");

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("apod-title").textContent = data.title;
  document.getElementById("apod-explanation").textContent = data.explanation;
  document.getElementById("apod-image").src = data.url;
}
get("2026-10-28");


function DataShowtoday() {
  sections.forEach((s) => {
    s.classList.add("hidden");
    s.classList.remove("block");
  });
  today.classList.replace("hidden", "block");
  nav.forEach((n) => {
    n.classList.remove(
      "bg-blue-500/10",
      "text-blue-400",
      "rounded-lg",
      "font-medium",
      "transition-colors",
    );
  });
  one.classList.add(
    "bg-blue-500/10",
    "text-blue-400",
    "rounded-lg",
    "font-medium",
    "transition-colors",
  );
}

function DataShowLaunches() {
  sections.forEach((s) => {
    s.classList.add("hidden");
    s.classList.remove("block");
  });
  launches.classList.replace("hidden", "block");
  nav.forEach((n) => {
    n.classList.remove(
      "bg-blue-500/10",
      "text-blue-400",
      "rounded-lg",
      "font-medium",
      "transition-colors",
    );
  });
  two.classList.add(
    "bg-blue-500/10",
    "text-blue-400",
    "rounded-lg",
    "font-medium",
    "transition-colors",
  );
}
function DataShowplanets() {
  sections.forEach((s) => {
    s.classList.add("hidden");
    s.classList.remove("block");
  });
  planets.classList.replace("hidden", "block");
  nav.forEach((n) => {
    n.classList.remove(
      "bg-blue-500/10",
      "text-blue-400",
      "rounded-lg",
      "font-medium",
      "transition-colors",
    );
  });
  three.classList.add(
    "bg-blue-500/10",
    "text-blue-400",
    "rounded-lg",
    "font-medium",
    "transition-colors",
  );
  for (let i = 0; i < planet.length; i++) {
  planet[i].addEventListener("click",function(){
    showPlanet(i);
  })
  
}


}
