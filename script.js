const quizData = [
   { question: 'Who was the first president of US?',
    a: 'George Washington',
    b: 'Anita Baker',
    c: 'Georege Bush',
    d: 'Booker T. Washington',
    correct:'a',
 },

 {
     question: 'Which wrestler was known for "the peoples eyebrow"?',
     a: 'Stone Cold Steve Austin',
     b: 'Triiple H',
     c: 'The Undertaker',
     d: 'The Rock',
     correct: 'd'
 },
 {
     question: 'Which subatomic particle contains a negative charge?',
     a: 'protons',
     b: 'electrons',
     c: 'nuetrons',
     d: 'subtrons',
     correct: 'b'
 },
 {
     question: 'Whats the capital of Missouri?',
     a: 'Jefferson City',
     b: 'Des Moines',
     c: 'Juneau',
     d: 'Annapolis',
     correct: 'a'
 },
 {
     question: 'What does DMX stand for?',
     a: 'Dog Man X',
     b: 'Dark Man X',
     c: 'Dope Man X',
     d: 'Dark Master X',
     correct: 'b'
 }


];
const questionEl= document.getElementById ("question");

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

  
}

 submitBtn.addEventListener("click", ()=> {

    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    }
    else { alert("Complete!")}
    loadQuiz();
 })