const buttonSet = document.querySelectorAll('.rating-button')
const submitButton = document.querySelector('#submit')
const ratingPage = document.querySelector('#rating')
const thankYouPage = document.querySelector('#thank-you')

const resultText = document.querySelector('#result-text')

let selectedOption
buttonSet.forEach((button) => {
    button.addEventListener('click', (e) => {
        selectedOption = e.target.dataset.index
        resultText.textContent = selectedOption
    })
})

submitButton.addEventListener('click', (e) => {
    if (!selectedOption) return
    ratingPage.classList.add('hidden')
    thankYouPage.classList.toggle('hidden')
})