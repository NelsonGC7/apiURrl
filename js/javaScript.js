const burger = document.getElementById('burger');
const nav = document.getElementById('headeR_navID');
const InputUrl = document.getElementById('URL');
const bton = document.getElementById('headeR__subl-btonID')

const url = InputUrl.value;
const options = {
    method: 'POST',
    headers: {
	    	'content-type': 'application/x-www-form-urlencoded',
	    	'X-RapidAPI-Key': '60f7e74316msh27534207aad635dp1490fejsnc78d61181d90',
	    	'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
    	},
    body: new URLSearchParams({
	    	url: 'https://www.youtube.com/watch?v=7-pnUgGurMU&list=RDEMpkUuvOoduuY0Cxxwh8iRMA&index=10'
	    }),
};

const menuActive = ()=>{
	burger.addEventListener('click',()=>{
		nav.classList.remove("desactiv"),nav.classList.toggle("headeR__nav")
		if(!nav.classList.contains('headeR__nav')){
			nav.classList.add("desactiv");
		}
	})
}


const FETCH = (URL,OPTIONS)=>{
    fetch(URL,OPTIONS)
        .then(datos =>{
         
        
        })
};


const erroeInput= ()=>{
	document.querySelector('form').addEventListener('submit',(e)=>{
		e.preventDefault()
	});
	
	
	const parrafo = document.createElement('p');
	parrafo.innerHTML = ('escribe en una URL');
	parrafo.setAttribute ('class','errorINPUT');
	
	const erRepetido = document.querySelector('.errorINPUT');	
	bton.addEventListener('click',()=>{
		if(InputUrl.value ===''){
			InputUrl.insertAdjacentElement('afterend',parrafo)
			if(erRepetido){
				erRepetido.remove()
			}else{
				InputUrl.insertAdjacentElement('afterend',parrafo)
			}
			return false;
				
		}else{
				if(parrafo){
				 parrafo.remove()
				}
			
			
			
		}
	
		
			
			
	})

}









erroeInput()
menuActive()
FETCH(url,options);







console.log(bton)


