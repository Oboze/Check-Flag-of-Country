let userMessage=document.getElementById('paragraph');

		const flagKenya=()=>{
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
		triggerBody.addEventListener('mouseover',()=>{hoverBody()},false);

		
		
