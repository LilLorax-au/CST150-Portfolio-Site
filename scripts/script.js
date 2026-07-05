function main(){
	
	const ulHandler = document.querySelector('nav ul');
	const hamToggler = document.getElementById('hamBurg');
	const contactForm = document.querySelector('form');

	document.querySelectorAll('nav a').forEach(anchor => {
		anchor.addEventListener('click', (e) => {
			e.preventDefault();

			const targetId = anchor.innerHTML.toLowerCase();
			const target = document.getElementById(targetId);

			target.scrollIntoView({
				behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
			});
		});
	});

	hamToggler.addEventListener('click', () => {
		if (ulHandler.classList.contains('active')){
			ulHandler.classList.toggle('deActive');
		}
		else{
			ulHandler.classList.toggle('active');
		}
	});

	ulHandler.addEventListener('animationend', () => {
		if(ulHandler.classList.contains('deActive')){
			ulHandler.classList.toggle('active');
			ulHandler.classList.toggle('deActive');
		}
	});

	document.querySelectorAll('input, textarea').forEach(input => {
		input.addEventListener("input", () => {
			input.setCustomValidity("");
		});
	});

	contactForm.addEventListener("sbumit", (e) =>{
		alert("didnt fuck up")
	})

	function validateStringInput(form){
		const bad_char = new Set(['/','\\','_','%','\'','\"'])

		for ( let input of form.querySelectorAll('input, textarea')){
			
			input.setCustomValidity("");

			if(!input.value && input instanceof HTMLInputElement){
				input.setCustomValidity("input cannot be blank");
				
				form.reportValidity();
				
				return false;

			}
			else if(input instanceof HTMLInputElement && input.value.length > 30){
				input.setCustomValidity("input cannot have more then 30 characters");
				
				form.reportValidity();
				
				return false;
				
			}
			else if(input.type == ('textarea') && input.value.length > 250){
				input.setCustomValidity("input cannot have more then 250 characters");
				
				form.reportValidity();
				
				return false;

			}
			else if ([...input.value].some(x => bad_char.has(x)))
			{
				input.setCustomValidity(`Invalid characters detected. Please remove any of the following characters: ${Array.from(bad_char).join(" ")}`);
				
				form.reportValidity();
				
				return false;
			}
		}
		return true;
	}



	return
}

window.addEventListener("load", main)



