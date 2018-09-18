let userMessage=document.getElementById('paragraph');

		

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
		flagSelector.addEventListener('mouseover',(e)=>{getFlag(e);}, false);
		