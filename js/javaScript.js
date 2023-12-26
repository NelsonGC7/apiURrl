 const hamburger = document.querySelector('.headeR__hamburger');
 const navact =  document.getElementById('headeR_nav');


 

    hamburger.addEventListener('click', navAct=>{
    navact.classList.toggle("header-no")
    
    
    if(!navact.classList.contains("header-no")){
        navact.classList.add('headeR__nav')
    }else{
        navact.classList.remove('headeR__nav')
    };
    
    
    console.log(navact.classList.contains("header-no"))
    
    

})
