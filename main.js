let btn = document.querySelector('.btn');
let menu = document.querySelector('.menu');
btn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    btn.classList.toggle('active');
});
  
  
  const correctAnswers = {
    q1: 'correct',
    q2: 'correct',
    q3: 'correct',
    q4: 'correct',
    q5: 'correct',
    q6: 'correct',
    q7: 'correct',
    q8: 'correct',
    q9: 'correct',
    q10: 'correct',
    // أضف الإجابات الصحيحة للأسئلة الإضافية (q11 إلى q20)
  };
  
  document.getElementById('submit').addEventListener('click', () => {
    let score = 0;
    const formData = new FormData(document.getElementById('quiz-form'));
  
    formData.forEach((value, key) => {
      if (correctAnswers[key] === value) score++;
    });
   let result = document.getElementById('result');
   result.style.cssText= `
   display: flex;
   `;
   window.scrollTo(0,3000);
    result.textContent = `لقد حصلت على ${score} من ${Object.keys(correctAnswers).length}.`;
  });


