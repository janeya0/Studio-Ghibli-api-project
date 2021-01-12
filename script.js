
// assign root div a variable
const app = document.getElementById('root');
//create div under the class, 'container'
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container);

const app2 = document.getElementById('root2');
const subheading = document.createElement('div');
subheading.setAttribute('class', 'subheading');
subheading.textContent = "Obtained Using APIs";
app2.appendChild(subheading);
// Create a div with a card class


titles = [];

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >=200 && request.status <400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      console.log(movie.title);
      titles.push(movie.title);
      //create h1 to put film title in
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;
      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 200)
      p.textContent = `${movie.description}...`
      // Append the cards to the container element
      container.appendChild(card);
      // Each card will contain an h1 and a p
      card.appendChild(h1);
      card.appendChild(p)
    });
  }
  else {
    console.log("error");
    alert('error');
  }
}



request.send();
