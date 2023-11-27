/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: [
      "1967",
      "1974", 
      "1962", 
      "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: [
      "Zelda", 
      "Ganon", 
      "Tom", 
      "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: [
      "Apollo 9", 
      "Mercury 1", 
      "Apollo 13", 
      "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

let affichageQuestions = document.getElementById("question");
let affichageReponse = document.getElementById("answers");
// let reponse = document.createElement("li");
// reponse.classList.add("answer");
// affichageReponse.appendChild(reponse);
console.log("affichage réponse : ",affichageReponse);
console.log("");
console.log("");

/*************************/
/* Contenu du DOM chargé */
/*************************/
document.addEventListener("DOMContentLoaded", () => {
  console.log("objet nodeJs des questions :",questions);
  console.log("affichage des questions : ",affichageQuestions.innerText = questions[0].question);
  console.log("");
  questions.forEach(compteurQuestions => {
    console.log("compteur questions :",compteurQuestions);
    let reponseQuestions = compteurQuestions.answers;
    console.log("reponseQuestions :",reponseQuestions);
    affichageQuestions.innerText = compteurQuestions.question;
    reponseQuestions.forEach(compteurReponse => {
      console.log("compteurReponse :", compteurReponse);
      console.log("");
      let reponse = document.createElement("li");
      reponse.classList.add("answer");
      reponse.innerText = compteurReponse;
      affichageReponse.appendChild(reponse)
    });
  });

  
  // for (let i = 0; i < questions.length; i--) {
  //   const element = questions[i].question;
  //   console.log(element);
  //   affichageQuestions.innerText = element
  // }

// démarrage du quizz
  
});
