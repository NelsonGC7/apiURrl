const burger = document.getElementById('burger');
const nav = document.getElementById('headeR_navID');
const InputUrl = document.getElementById('URL');
const bton = document.getElementById('headeR__subl-btonID');
const pedido = 'https://api-ssl.bitly.com/v4/shorten';
const cors = 'https://cors-anywhere.herokuapp.com/';


const options =  {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer {976c57808e8a9c369a9eec627edc80377a3bb34c}',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "long_url": 'https://youtu.be/8d651ukb-Y8?si=T-ZRCEY6DehICM3h', "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
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
        .then(respuesta =>{
            console.log(respuesta)
        })
        .catch(err =>{
			console.log(err)
        
        
        })
};
document.querySelector('form').addEventListener('submit',(e)=>{
	e.preventDefault()
	
});



const erroeInput= ()=>{
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
			
				
		}else{
				url = InputUrl.value
				if(parrafo){
				 parrafo.remove()
				}
			
			
			
		};
		FETCH(`${cors}https://api-ssl.bitly.com/v4/shorten`,options);
		
	})

}









erroeInput()
menuActive()











