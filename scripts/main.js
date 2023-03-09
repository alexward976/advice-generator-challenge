
const adviceNum = document.getElementById('advice-num');
const adviceContent = document.getElementById('advice-content');
const newAdviceBtn = document.getElementById('new-advice-btn');
newAdviceBtn.addEventListener('click', generateAdvice);

async function generateAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const advice = await response.json();

    console.log(advice);

    adviceNum.textContent = advice.slip.id;
    adviceContent.textContent = `"${advice.slip.advice}"`;
}

generateAdvice();