function convertedInnerText(id){
    const convertedInnerText = document.getElementById(id).innerText;
    const menInnerText = parseInt(convertedInnerText);
    return(menInnerText);

}

function setInnerText(id,innerText){
    document.getElementById(id).innerText =innerText;
}

function forOtherId (id){
    document.getElementById(id).addEventListener('click',function(){
        alert('Board updated SuccessFully')
        const taskAssignee =   convertedInnerText('task-assigend');
        const sum = taskAssignee - 1;
         setInnerText('task-assigend',sum)
         const add =   convertedInnerText('add');
         const sum2 = add + 1;
         setInnerText('add',sum2);

         const container = document.getElementById("history-data");
         const newParagraph = document.createElement("p");
         container.append(newParagraph);
         let currentDate = new Date();
         let hours = currentDate.getHours();
         let minutes = currentDate.getMinutes();
         let seconds = currentDate.getSeconds();
         let amPm = hours >= 12 ? 'PM' : 'AM';
         hours = hours % 12; 
         hours = hours ? hours : 12;
         minutes = minutes < 10 ? '0' + minutes : minutes;
         seconds = seconds < 10 ? '0' + seconds : seconds;
         newParagraph.innerText= ("You have Complete The Task Add Dark Mode at" + hours + ":" + minutes + ":" + seconds + " " + amPm)
      
        document.getElementById('history-data').style.display ='block';
        document.getElementById(id).disabled = true;
})
}


