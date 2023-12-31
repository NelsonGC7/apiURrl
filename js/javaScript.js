const burger = document.getElementById('burger');
const nav = document.getElementById('headeR_navID');

const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
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
menuActive()

const FETCH = (URL,OPTIONS)=>{
    fetch(URL,OPTIONS)
        .then(datos =>{
         
        
        })
}
FETCH(url,options)


