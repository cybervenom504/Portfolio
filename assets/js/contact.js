/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
	e.preventDefault()

	// serviceId - templateID - #form - publicKey
	emailjs.sendForm('service_iu0ahj6','template_4k96ans','#contact-form','Q3XDrDKSqZWmBGxYv')
		.then(() => {
			//show sent message
			contactMessage.textContent = 'Message sent successfully ✅'

			//Remove message after five seconds
			setTimeout(() => {
				contactMessage.textContent = ''
			}, 5000)

			//clear input field
			contactForm.reset()

		}, () => {
			//Show error message
			contactMessage.textContent = 'Message not sent (service error) ❌'
		})
}

contactForm.addEventListener('submit', sendEmail);