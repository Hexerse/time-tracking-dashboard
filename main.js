let jsonData;


fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    jsonData = data;

    processData(jsonData);
  })
  .catch(error => console.error('Error loading JSON:', error));


function processData(data){
  console.log(data)
}