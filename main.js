

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
  studyPrevious.innerText = `Last Week ${data[2].timeframes.daily.previous} hrs`

  // Excercise
  excerciseHours.innerText = `${data[3].timeframes.daily.current} hrs`
  excercisePrevious.innerText =` last Week ${data[3].timeframes.daily.previous} hrs`


  // Social
  socialHours.innerText = `${data[4].timeframes.daily.current} hrs`
  socialPrevious.innerText =`Last Week ${data[3].timeframes.daily.previous} hrs`

  // Self Care
  selfHours.innerText = `${data[4].timeframes.daily.current} hrs`
  selfPrevious.innerText =`Last Week ${data[3].timeframes.daily.previous} hrs`
  });
})




// Weekly Button

document.getElementById("weekly-btn").addEventListener("click", function(){
  fetch("./data.json")
  .then(response => response.json())
  .then(data => {
  
  //work
  workHours.innerText =`${data[0].timeframes.weekly.current} hrs `
  workPrevious.innerText = `Last Week - ${data[0].timeframes.weekly.previous} hrs `

  // play
  playhours.innerText = `${data[1].timeframes.weekly.current} hrs`
  playPrevious.innerText = ` Last week - ${data[1].timeframes.weekly.previous} hrs`

  // study
  studyHours.innerText = `${data[2].timeframes.weekly.current} hrs`
  studyPrevious.innerText = `Last week ${data[2].timeframes.weekly.previous} hrs`

  // Excercise
  excerciseHours.innerText = `${data[3].timeframes.weekly.current} hrs`
  excercisePrevious.innerText =` Last Week ${data[3].timeframes.weekly.previous} hrs`


  // Social
  socialHours.innerText = `${data[4].timeframes.weekly.current} hrs`
  socialPrevious.innerText =`Last Week ${data[3].timeframes.weekly.previous} hrs`

  // Self Care
  selfHours.innerText = `${data[4].timeframes.weekly.current} hrs`
  selfPrevious.innerText =`Last Week ${data[3].timeframes.weekly.previous} hrs`
  });
})


 



// Monthly Button

document.getElementById("monthly-btn").addEventListener("click", function(){
  fetch("./data.json")
  .then(response => response.json())
  .then(data => {

  //work
  workHours.innerText =`${data[0].timeframes.monthly.current} hrs `
  workPrevious.innerText = `Last Week - ${data[0].timeframes.monthly.previous} hrs `

  // play
  playhours.innerText = `${data[1].timeframes.monthly.current} hrs`
  playPrevious.innerText = ` Last Week - ${data[1].timeframes.monthly.previous} hrs`

  // study
  studyHours.innerText = `${data[2].timeframes.monthly.current} hrs`
  studyPrevious.innerText = `Last Week ${data[2].timeframes.monthly.previous} hrs`

  // Excercise
  excerciseHours.innerText = `${data[3].timeframes.monthly.current} hrs`
  excercisePrevious.innerText =`  Week ${data[3].timeframes.weekly.previous} hrs`


  // Social
  socialHours.innerText = `${data[4].timeframes.monthly.current} hrs`
  socialPrevious.innerText =`Last Week ${data[3].timeframes.monthly.previous} hrs`

  // Self Care
  selfHours.innerText = `${data[4].timeframes.weekly.current} hrs`
  selfPrevious.innerText =`Last Week ${data[3].timeframes.monthly.previous} hrs`
  });
})

