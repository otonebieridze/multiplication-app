/* //////////////////////////////////////////////////////////////// */
let question = document.getElementById("question")
let firstRandomNum = Math.floor(Math.random() * 10)
let secondRandomNum = Math.floor(Math.random() * 10)
question.innerHTML = `What is ${firstRandomNum} multiply by ${secondRandomNum}?`

/* //////////////////////////////////////////////////////////////// */
let scoreNumber = document.getElementById("score__number")
let answerField = document.getElementById("answer__field")
let submitBtn = document.getElementById("submit__btn")
let yourScore = 0


/* /////////////////////////////// function calculation ////////////////////////// */
let calculation = () => {
    let trueAnswer = firstRandomNum * secondRandomNum

    if (answerField.value == trueAnswer) {
        yourScore++
        scoreNumber.textContent = yourScore
    } else {
        yourScore--
        scoreNumber.textContent = yourScore
    }

    firstRandomNum = Math.floor(Math.random() * 10)
    secondRandomNum = Math.floor(Math.random() * 10)
    question.innerHTML = `What is ${firstRandomNum} multiply by ${secondRandomNum}?`

    answerField.value = ''
}

/* //////////////////////////////////////////////////////////////// */
submitBtn.addEventListener("click", () => {
    calculation()
})

/* //////////////////////////////////////////////////////////////// */
answerField.addEventListener("keypress", (event) => {
    if (event.key == 'Enter') {
        calculation()
    }
})
