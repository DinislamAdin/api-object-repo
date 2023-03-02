const loadAdvice = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => displayAdvice(data))
}

const displayAdvice = advice =>{
    console.log(advice);
    const adviceContainer =document.getElementById('advice-container');
    adviceContainer.innerText = advice.slip.advice;
}

loadAdvice();