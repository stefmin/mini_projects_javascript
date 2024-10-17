const correctAnswers= ["B", "B", "B", "B"];
const form = document.querySelector('.quiz-form'); 

form.addEventListener('submit', e => {
    e.preventDefault();
    let score=0;

    for(let i=0; i<4; i++)
    {
        let ans = document.querySelector(`[name="q${i+1}"]:checked`).value;
        if(ans === correctAnswers[i])
            score += 25;
    }

    scrollTo(0,0);
    const scoreSection = document.querySelector('.result');
    scoreSection.classList.remove('d-none');
    const percentage = document.querySelector('.result span')

    let output = 0;
    const timer = setInterval(() =>{
        percentage.innerText = `${output}%`;
        if(output === score)
            clearInterval(timer);
        output++;
    }, 10)

});