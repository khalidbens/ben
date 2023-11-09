let modal = document.createElement("div");
document.body.appendChild(modal);

let titre = document.createElement('h2');
titre.textContent = 'Santé';

let paragraphe = document.createElement('p');
paragraphe.textContent = 'Manger 5 fruits et légume par jour, les produits laitier sont nos amis pour la vie';

let button1= document.createElement('button');
let button2= document.createElement('button');
button1.textContent = 'tchin tchin!';
button2.textContent = "le gras c'est la vie!";



modal.append(titre);
modal.append(paragraphe);
modal.append(button1,button2);

// exemple prof





