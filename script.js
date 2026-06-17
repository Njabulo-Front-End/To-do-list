"use strict";

//Declaring variables from html
const add = document.getElementById('add');
const list = document.getElementById('list');
const task = document.getElementById('listitem');

//Listening for click event to add to list
add.addEventListener('click', printTask);
task.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        printTask();
    }       
})

//task printing function
function printTask(){

    //User value   
    let input = task.value.trim();

    //do nothing if theres no input
    if (input === '') return;

    //Create list elements: list, remove, mark done
    let li = document.createElement('li');
        li.textContent = input;

    let del = document.createElement('img');
        del.src = 'Images/minus.png';
        del.width = 24;
        del.style.marginLeft = 'auto';
        
        del.addEventListener('click', function(){
            li.remove();
        });

        li.appendChild(del);
        list.appendChild(li);

        task.value = '';

        li.addEventListener('click',function(){
        li.classList.toggle('done');
    }) 
}



