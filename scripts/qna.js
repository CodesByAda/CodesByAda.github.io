document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll('.question-div');
    questions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const questionIcon = this.querySelector(".question-icon");

            if (!answer.classList.contains('hide')) {
                answer.classList.add('hide');
                questionIcon.style.transform = "rotate(0)";
            } else {
                document.querySelectorAll('.answer').forEach(ans => {
                    ans.classList.add('hide');
                });

                document.querySelectorAll(".question-icon").forEach(icon => {
                    icon.style.transform = "rotate(0)";
                })

                answer.classList.remove('hide');
                questionIcon.style.transform = "rotate(45deg)";
            }
        });
    });
})