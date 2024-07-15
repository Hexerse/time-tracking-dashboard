let jsonData;
const containerHTML = document.body
const div = document.createElement("div")
containerHTML.append(div)
containerHTML
.innerHTML = ` 
<div class="container">
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
  </div>
` 


fetch('./data.json')
  
  .then(response => response.json())
  .then(data => {
    console.log(data);
    jsonData = data;

    loophtml(jsonData);
  })
  .catch(error => console.error('Error loading JSON:', error));


  function loophtml (jsonData){
    jsonData.forEach(element => {
      console.log(element);
      console.log (containerHTML)
      


    });
  }


