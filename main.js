let jsonData;
const containerHTML = document.body
const div = document.createElement("div")

containerHTML.append(div)



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


