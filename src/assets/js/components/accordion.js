export function accordion() {
    const questionsList = document.querySelectorAll(".questions__question");

    questionsList.forEach(question => {
        question.addEventListener("click", () => handleClick(question))
    })
    
    function handleClick(question) {
        const answer = question.nextElementSibling;
        const wrapper = answer.parentNode;
    
        answer.classList.toggle("questions__answer_visible");
        question.classList.toggle("questions__question_active");
        wrapper.classList.toggle("questions__wrapper_active");
    
        questionsList.forEach(item => {
            if (item !== question) {
                const answerItem = item.nextElementSibling;
                const wrapperItem = answerItem.parentNode;
                answerItem.classList.remove("questions__answer_visible");
                item.classList.remove("questions__question_active");
                wrapperItem.classList.remove("questions__wrapper_active");
            }
        })
    }
}