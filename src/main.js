import './style.css'

const finishButton = document.getElementById( "finish" )
const question = document.getElementById( "sovol" )
const option1 = document.getElementById( "first" )
const option2 = document.getElementById( "second" )
const option3 = document.getElementById( "third" )
const bir = document.getElementById( "bir" )
const ikki = document.getElementById( "ikki" )
const uch = document.getElementById( "uch" )

const toriJovobArrayi = [ bir, ikki, uch ]

console.log( toriJovobArrayi )

const newQuestion = {}

finishButton.onclick = () => {

  newQuestion.question = sovol.value
  newQuestion.options = []
  newQuestion.options.push( {answer:option1.value}, {answer:option2.value}, {answer:option3.value} )
  for( let i = 0; i < toriJovobArrayi.length; i++ ){
    if (toriJovobArrayi[i].checked === true) {
      newQuestion.correctIndex = i
    }
  }

fetch("http://localhost:3000/questions", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newQuestion)
})

question.value = ""
option1.value = ""
option2.value = ""
option3.value = ""

alert( "Sovollar qo'shildi" )
}


