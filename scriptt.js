const questions =[
    {
       questions:"which day is celebrated as world environment day"
        answer: [
            { text:"december 30",correct:false}
            { text:"june 6",correct:false}
            { text:"june 5",correct: true}
            { text:"september 13",correct:false} 


        ]
    }
{
    questions:"what are some examples of natural ecosystem"
    answer: [
    { text:"glasslands",correct:true}
    { text:"buldings",correct:false}
    { text:"bridges",correct: flase}
    { text:"dam",correct:false} 
]

}
{
    questions:"what is the gas relesed by plants during day time"
    answer: [
    { text:"carbon dioxid",correct:false}
    { text:"carbon monoxide",correct:false}
    { text:"hydrogen",correct: flase}
    { text:"oxygen",correct:true} 
]

}
{
    questions:"what is the gas relesed by plants during night"
    answer: [
    { text:"carbon monoxide",correct:false}
    { text:"carbon dioxid",correct:true}
    { text:"hydrogen",correct:flase}
    { text:"oxygen",correct:false} 

]
}
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("anwer-button");
const nextButton=document.getElementsById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startquiz(){
    resetstate();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionelement.innerHTML = questionNo + ". " + currentQuestion.questions;
    currentQuestion.answers.foreach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button); 
        if(answer.correct){
            button.dataset.correct = answer.correct; 
    }
        button.addEventListener("click, selectAnswer");
    });
}
function resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstchild){
    answerButton.removeChild(answerButton.firstchlid);
 }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = BelectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classlist.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.child).forEach(button =>{
        if(button.datset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.disply = "block";
}


functionshowScore();{
    resetstate();
    questionElement.innerHTML = `You score ${score} out of ${question.lenght}!`;
    nextButton.innerHTM = "Play Again";
    nextButton.style.disply = "block";
}



function  handleNextButton(){

    currentQuestionIndex++;
    if(currentQuestionIndex < questionElement.length){
        showQuestion();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questionElement.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});


startQuiz();