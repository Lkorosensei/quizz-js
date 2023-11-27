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

// let reponse = document.createElement("li");
// reponse.classList.add("answer");
// affichageReponse.appendChild(reponse);


/*************************/
/* Contenu du DOM chargé */
/*************************/
document.addEventListener("DOMContentLoaded", () => {
  let affichageQuestions = document.getElementById("question");
  let affichageReponse = document.getElementById("answers");
  let score = document.getElementById("score").innerText;
  console.log("score :",score);
  console.log("affichage réponse : ",affichageReponse);
  console.log("");
  console.log("");

  let indexQuestionNodeJS = 0;

  afficherQuestions()
    function afficherQuestions(params) {
      affichageQuestions.innerText = questions[indexQuestionNodeJS].question;
      
      affichageReponse.innerHTML = "";  
      afficherReponses()
    }


    function afficherReponses(params) {
      questions[indexQuestionNodeJS].answers.forEach(compteurReponse => {
        let reponse = document.createElement("li");
        reponse.classList.add("answer");
        reponse.innerText = compteurReponse;
        affichageReponse.appendChild(reponse);
      })
    }
// démarrage du quizz
  affichageReponse.addEventListener("click", (event) => {
    
    console.log("event :",event);
    console.log("event target :", event.target);
    console.log("cible touche texte :",event.target.innerText);
    console.log("touche réponse clické ? :",event.target.classList.contains("answer"));
    console.log("liste réponses : ", event.target.parentNode.children);
    console.log("index/réponse N°",Array.from(event.target.parentNode.children).indexOf(event.target));

    if (event.target.classList.contains("answer")) {
      const indexReponseClicker = Array.from(event.target.parentNode.children).indexOf(event.target);

      if (indexReponseClicker === questions[indexQuestionNodeJS].correctAnswerIndex) {
        console.log("Bonne réponse !");
        indexQuestionNodeJS++
        console.log("score :",score);
        console.log("indexQuestionsNodeJS :",indexQuestionNodeJS);

        if (indexQuestionNodeJS < questions.length) {
          afficherQuestions();
        } else {
          affichageQuestions.innerText = "Merci d'avoir répondu :) !"
          affichageReponse.innerHTML = "";
          console.log(affichageQuestions);
        }
      } else {
        indexQuestionNodeJS++
        afficherQuestions()
        
      }
    }
  })
});


// console.log("objet nodeJs des questions :",questions);
// console.log("affichage de la 1ère questions : ",affichageQuestions.innerText = questions[0].question);
// console.log("");
// affichageQuestions.innerText = questions[0].question;
// questions.forEach(compteurQuestions => {
//   console.log("compteur questions :",compteurQuestions);
//   let reponseQuestions = compteurQuestions.answers;
//   console.log("reponseQuestions :",reponseQuestions);
//   affichageQuestions.innerText = compteurQuestions.question;
//   reponseQuestions.forEach(compteurReponse => {
//     console.log("compteurReponse :", compteurReponse);
//     console.log("");
//     let reponse = document.createElement("li");
//     reponse.classList.add("answer");
//     reponse.innerText = compteurReponse;
//     affichageReponse.appendChild(reponse)
//   });
// });


// // for (let i = 0; i < questions.length; i--) {
// //   const element = questions[i].question;
// //   console.log(element);
// //   affichageQuestions.innerText = element
// // }