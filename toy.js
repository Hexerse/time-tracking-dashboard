let jsonData;
const containerHTML = document.body

fetch('./data.json')
  
  .then(response => response.json())
  .then(data => {
    jsonData = data;

    loophtml(jsonData);
  })
  .catch(error => console.error('Error loading JSON:', error));


  function loophtml (jsonData){
    let repeatHTML = '';
    const html = `<div class="container">
    <div class="userContainer">
      <div class="userReport">
        <img src="./images/image-jeremy.png" alt="">
          <p class="reportfor"> <span class="smallreportfor">Report for</span> <br> <span class="namePlate">Jeremy Robson</span></p>
      </div>
      <div class="options">
        <button class="daily">Daily</button>
        <button class="weekly">Weekly</button>
        <button class="monthly">Monthly</button>
      </div>
    </div>`

    jsonData.forEach(element => {
    repeatHTML +=
      `<div class="workContainer">
        <div class="withinContainer">
          <div class="belowheading">
            <p class="heading">${element.title} <button><img src="./images/icon-ellipsis.svg" alt=""></button></p>
            <div class="divbelowheading">
              <span class="hrs">${element.timeframes.daily}</span> <!-- daily -->
              <span class="previous">${element.timeframes.previous}</span> <!-- daily -->
            </div>
          </div>
      </div>
    </div>`

      


    });
  }
