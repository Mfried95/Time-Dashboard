

// Daily Button

document.getElementById("daily-btn").addEventListener("click", function(){
  fetch("./data.json")
  .then(response => response.json())
  .then(data => {
  document.getElementById("work-hours").innerText = data[0].timeframes.daily
  console.log()
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
