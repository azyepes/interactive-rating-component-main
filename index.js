let $ = (id) => document.querySelector(id)

let ratingSection = $('#rating-section')
let thanksSection = $('#thanks-section')
let rateSelected = $('#rate-selected')
let input = document.getElementsByName('radio')
let submit = $('#submit')
let required = $('.required')

submit.addEventListener('click', () => {

    for (let i = 0; i < input.length; i++) {

        if (input[i].checked) {
            const element = input[i].value;

            ratingSection.classList.add('hiden')
            thanksSection.classList.remove('hiden')

            rateSelected.textContent = element
            break
        } else {
            required.textContent = 'Rate us to continue, please.'
        }
    }
}
)
