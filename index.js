const tab = document.querySelector('.tabs');
const image = document.querySelectorAll('.image');

tab.addEventListener('click',(e)=>{         // event delegation
     //console.log(e.target.dataset.category);
     if(e.target.dataset.category !== undefined){
        show(e.target.dataset.category)
     }
     
})



function show(category){
    image.forEach((elem) => {
        if(elem.dataset.category === category || category==="all"){
            elem.style.display = "inline-block"
        }
        else{
            elem.style.display = "none"
        }
    })
}

