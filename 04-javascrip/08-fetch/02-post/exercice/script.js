"use strict";


fetch('https://api.api-onepiece.com/fruits')
  .then(response => response.json())
  .then(data => {
    const fruitList = document.getElementById('fruit-list');

    data.forEach(fruit => {
      const li = document.createElement('li');
      const card = document.createElement('div');
      card.classList.add('fruit-card');

      const name = document.createElement('h2');
      name.textContent = fruit.name;
      card.appendChild(name);

      const type = document.createElement('p');
      type.textContent = `Type: ${fruit.type}`;
      card.appendChild(type);

      const description = document.createElement('p');
      description.textContent = `Description: ${fruit.description}`;
      card.appendChild(description);

      li.appendChild(card);
      fruitList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la requête:', error);
  });



