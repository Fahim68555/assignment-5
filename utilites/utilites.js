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
         setInnerText('add',sum2)
         

    })
}