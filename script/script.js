
let currentDate = new Date();
let options = { weekday: 'short',  month: 'short', day: 'numeric', year: 'numeric' };

let formattedDate = currentDate.toLocaleDateString('en-US', options);
document.getElementById('update-date').innerText = formattedDate;


function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);  
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256);  
    return `rgb(${r}, ${g}, ${b})`;  
}
function changeRGBColor() {
document.body.style.backgroundColor = getRandomRGB();
}
forOtherId ('completed1')
forOtherId ('completed2');
forOtherId ('completed3');
forOtherId ('completed4');
forOtherId ('completed5');
forOtherId ('completed6');

document.getElementById('history-data').style.display ='none';

document.getElementById('clear-history').addEventListener('click',function(){
document.getElementById('history-data').style.display ='none';
});

document.getElementById('question-btn').addEventListener('click',function(){
    window.location.href ="index2.html"
});

