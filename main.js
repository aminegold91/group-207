let btn = document.querySelector('.btn');
let menu = document.querySelector('.menu');
btn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    btn.classList.toggle('active');
});
document.getElementById("submit-btn").addEventListener("click", function () {
    const answers = {
      q1: "b",
      q2: "c",
      q3: "b"
    };
  
    let score = 0;
    const form = document.getElementById("quiz-form");
    const result = document.getElementById("result");
    result.style.right='-50%';
    let body = document.body;
    body.style.cssText=`
    backdrop-felter : blur(10px);
    background: grey;
    `;
  
    for (const [question, correctAnswer] of Object.entries(answers)) {
      const userAnswer = form[question].value;
      if (userAnswer === correctAnswer) {
        score++;
      }
    }
  
    result.textContent =`  نتيجتك: ${score} من ${Object.keys(answers).length}`;
    result.style.color = score === Object.keys(answers).length ? "green" : "red";
  });