const burger = document.getElementById('burger');
const nav = document.getElementById('headeR_navID');
const InputUrl = document.getElementById('URL');
const bton = document.getElementById('headeR__subl-btonID');



const menuActive = ()=>{
	burger.addEventListener('click',()=>{
		nav.classList.remove("desactiv"),nav.classList.toggle("headeR__nav")
		if(!nav.classList.contains('headeR__nav')){
			nav.classList.add("desactiv");
		}
	})
};
const validarUrl = () =>{
	const regex = /^(ftp|http|https):\/\/[^ "]+$/;
	return regex.test(InputUrl.value);
	
};
const EnviarPeticon = (urrl)=>{
	const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': '60f7e74316msh27534207aad635dp1490fejsnc78d61181d90',
			'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
		},
		body: new URLSearchParams({
			url:`${urrl}`,
		})
	};
	
	fetch(url,options)
	
				.then(respuesta => respuesta.json())
				.then(data =>{
					if(data){
						const urlContein = document.createElement('section');
						urlContein.setAttribute('class','Links__copy')
						urlContein.innerHTML = `
						<div class="Links__copy-url">
							<p>${InputUrl.value}</p>
						</div>
						<div class="Links__copy-bt">
							<a href= "${data.result_url}">${data.result_url}</a>
							<button class="Links__copy-bton">Copy</button>
						</div>
						`
						document.querySelector('form').insertAdjacentElement('afterend',urlContein)
						const btonCopy = document.querySelector('.Links__copy').children[1].children[1];
						const txtAcopy = document.querySelector('.Links__copy').children[1].children[0];
						btonCopy.addEventListener('click',()=>{
							const todos = document.querySelectorAll('.Links__copy');
									todos.forEach(texto =>{
										const CopyBton = texto.children[1].children[1];
										
										if(CopyBton.innerText ==='Copied!'){
											CopyBton.innerText = 'Copy';
											CopyBton.style.backgroundColor = ''
											
										}
									})
							navigator.clipboard.writeText(txtAcopy.innerHTML)
								.then(()=>{
									
					
									btonCopy.innerText = 'Copied!';
									btonCopy.style.backgroundColor = 'hsl(257, 7%, 63%)'
								})
								.catch(error =>console.log(error))
						
						})
					}
						
				})
				.catch(error => console.log(error))
				
			
}
const errorInput= ()=>{
	document.querySelector('form').addEventListener('submit',(e)=>{
		e.preventDefault()
		const erRepetido = document.querySelector('.errorINPUT');
		if(!validarUrl(InputUrl.value)){
			if(!erRepetido){
				const parrafo = document.createElement('p');
				parrafo.innerHTML = 'Escribe una URL correcta ej : "https://google.com"';
                parrafo.setAttribute('class', 'errorINPUT');
                InputUrl.insertAdjacentElement('afterend', parrafo); 
			};
		}else{
			if(erRepetido){
				erRepetido.remove()
			}
			EnviarPeticon(InputUrl.value)
			
		};
	});	
};


errorInput()
menuActive()


	

	

	
	  











