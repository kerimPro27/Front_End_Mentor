const AdviceGenerator=document.querySelector('.Advice-Generator');
const AdviceCounter=document.querySelector('.counter')
const btn=document.querySelector('.icon-dice-container');
AdviceCounter.innerText=1

function fetchData(){
    let Advice;
     fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(function (data){
       Advice = data.slip.advice;
        AdviceGenerator.innerText = `" ${Advice} "`; 
    })
}
fetchData();
btn.addEventListener('click',function(){
    fetchData();
    AdviceCounter.innerText++;
})