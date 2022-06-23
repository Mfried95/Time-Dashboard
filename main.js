

// All Hours and Previous hour variables

const workHours  = document.getElementById("work-hours")
const workPrevious = document.getElementById("previous-work-hours")

const playhours = document.getElementById("play-hours")
const playPrevious = document.getElementById("play-previous")

const studyHours = document.getElementById("study-hours")
const studyPrevious = document.getElementById("study-previous") 

const excerciseHours = document.getElementById("excercise-hours")
const excercisePrevious = document.getElementById("excercise-previous")

const socialHours = document.getElementById("social-hours")
const socialPrevious = document.getElementById("social-previous")


const selfHours = document.getElementById("self-hours")
const selfPrevious = document.getElementById("self-previous")
 

// Daily Button

document.getElementById("daily-btn").addEventListener("click", function(){
  fetch("./data.json")
  .then(response => response.json())
  .then(data => {

    //work
  workHours.innerText =`${data[0].timeframes.daily.current} hrs `
  workPrevious.innerText = `Last Week - ${data[0].timeframes.daily.previous} hrs `

  // play
  playhours.innerText = `${data[1].timeframes.daily.current} hrs`
  playPrevious.innerText = ` Last Week - ${data[1].timeframes.daily.previous} hrs`

  // study
  studyHours.innerText = `${data[2].timeframes.daily.current} hrs`

  });
})




// Weekly Button

document.getElementById("weekly-btn").addEventListener("click", daily)

function daily(){
  fetch("./data.json")
  .then(response => response.json())
  .then(data => {
  
  });

}



// Monthly Button

document.getElementById("monthly-btn").addEventListener("click", daily)

function daily(){
  fetch("./data.json")
  .then(response => response.json())
  .then(data => {
  
  });

}
