

function checkAnswer() {
    let correctAnswer = "4";
}

   let userAnswer = document.querySelector('input[name="quiz"]:checked');

    const button = document.getElementById('submit-answer');

    button.addEventListener('click', function (event) {

        
        correctAnswer = "4";
        userAnswer = document.querySelector('input[name="quiz"]:checked').value;

        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = `Correct! Well done`
        } else {
            document.getElementById('feedback').textContent = `That's incorrect. Try again!`
        }


    });





// function checkAnswer() {
//     let correctAnswer = "4";

//     userAnswer = document.querySelector('input[name="quiz"]:checked').value;

//     const button = document.getElementById('submit-answer');

//     submit-answer.addEventListener('onclick', function () {
        

//         userAnswer = document.querySelector('input[name="quiz"]:checked').value;

//         if (userAnswer = "4") {
//             document.getElementById('feedback').textcontent = `Correct! Well done`
//         } else {
//             document.getElementById('feedback').textcontent = `That's incorrect. Try again!`
//         }


//     });
// }
