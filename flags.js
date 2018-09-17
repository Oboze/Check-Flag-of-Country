let userMessage=document.getElementById('paragraph');

		/*const flagKenya=()=>{
			userMessage.textContent="This flag belongs to Kenya";
		}

		const flagChina=()=>{
			userMessage.textContent="This flag belongs to China";
		}

		const flagAustralia=()=>{
			userMessage.textContent="This flag belongs to Australia";
		}

	    const hoverBody=()=>{
			userMessage.innerHTML="<em>Click on one of the flags</em>";
			
		}

		let triggerKenya=document.getElementById("kenya");
		triggerKenya.addEventListener('click',flagKenya,false);

		let triggerChina=document.getElementById("china");
		triggerChina.addEventListener('click',flagChina,false);

		let triggerAustralia=document.getElementById("australia");
		triggerAustralia.addEventListener('click',flagAustralia,false);

		let triggerBody=document.querySelector("body");
		triggerBody.addEventListener('mouseover',()=>{hoverBody()},false);*/


		function getTarget(e){
			return e.target;
		}

		function getFlag(e){
			let target=getTarget(e);

			if (target===document.getElementById('kenya')){
				userMessage.innerHTML="The flag belongs to Kenya";
			}else if(target===document.getElementById('china')){
				userMessage.innerHTML="The flag belongs to China";
			}else if (target===document.getElementById('australia')){
				userMessage.innerHTML="The flag belongs to Australia";
			}else{
				userMessage.innerHTML="Click one of the flags";
			}
		}// end of function 


		let flagSelector=document.querySelector('div');
		flagSelector.addEventListener('click',()=>{getFlag(event);}, false);
		