let jsonData;


fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    jsonData = data;

    processData(jsonData);
  })
  .catch(error => console.error('Error loading JSON:', error));


let item;

function processData(data){
  console.log(data);
  //Filters work

  const dataWork = data.filter((data) => {
    return data.title === 'Work'
  })
  console.log (dataWork);

  const dataPlay = data.filter((data) => {
    return data.title === 'Play'
  })
  console.log (dataPlay);

}

