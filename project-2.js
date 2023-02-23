const openBtn = document.querySelector('#open-btn');
const modelContainer= document.querySelector('#model-container');
const closebtn= document.querySelector('#close-btn');

openBtn.addEventListener('click', function(){
    modelContainer.style.display= 'block';
})
closebtn.addEventListener('click', function(){
    modelContainer.style.display= 'none';
})
