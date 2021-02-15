const btns = document.querySelectorAll(".btn");
const faqs = document.querySelectorAll(".faq")

btns.forEach((btn, index)  =>{
    btn.addEventListener("click", () =>{
        faqs[index].classList.toggle("active")
    })
})