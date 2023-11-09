// "use strict";
const a1 = [3,12, 45, 4, 70];
const a2 = [3,"12", 45, 4, 70];

// function tri(tableau) {
//     return new Promise((resolve, reject) => {
//       if (!Array.isArray(tableau)) {
//         reject(new Error('Le paramètre doit être un tableau.'));
//       } else {
//         try {
//           const tableauTrie = tableau.sort((a, b) => a- b);
//           resolve(tableauTrie);
//         } catch (error) {
//           reject(error);
//         }
//       }
//     });
//   }

//   tri(a1).then(tableau=>console.log(tableau)).catch(e=>console.error(e));
// tri(a2).then(tableau=>console.log(tableau)).catch(e=>console.error(e));

function tri(tableau) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(tableau)) {
      reject(new Error('Le paramètre doit être un tableau.'));
    } else {
      try {
        const tableauTrie = tableau.sort((a, b) => a - b);
        if (tableauTrie.every(element => typeof element === 'number')) {
          resolve(tableauTrie);
        } else {
          reject(new Error('Le tableau contient des valeurs non-numériques.'));
        }
      } catch (error) {
        reject(error);
      }
    }
  });
}

// Utilisation de la méthode then et catch pour gérer la résolution et la rejet de la promesse
tri(a1)
  .then(tableau => console.log(tableau))
  .catch(e => console.error(e));

tri(a2)
  .then(tableau => console.log(tableau))
  .catch(e => console.error(e));

  