const btns = document.querySelectorAll('.item')
const answers = document.querySelectorAll('.answer')
const faqs = document.querySelectorAll('.faq')

console.log('hello');

faqs.forEach((faq) => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('active')
    })
});


