const confirm = document.getElementById('confirm');
const next = document.getElementById('next');
const form = document.getElementById('form');
const success = document.getElementById('success');

confirm.addEventListener('click',function(){

	var name = document.getElementById('name').value;
	var number = document.getElementById('number').value;
	var month = document.getElementById('month').value;
	var year = document.getElementById('year').value;
	var cvc = document.getElementById('cvc').value;
	var valid = true;

	if(name.length < 1){
		document.getElementById('name__error').innerText = "Can't be blank";
		valid = false;
	}

	if(number.length < 1){
		document.getElementById('number__error').innerText = "Can't be blank";
		valid = false;
	}

	if(month.length < 1){
		document.getElementById('date__error').innerText = "Can't be blank";
		valid = false;
	}

	if(year.length < 1){
		document.getElementById('date__error').innerText = "Can't be blank";
		valid = false;
	}	

	if(cvc.length < 1){
		document.getElementById('cvc__error').innerText = "Can't be blank";
		valid = false;
	}

	if(!isNaN(name)){
		document.getElementById('name__error').innerText = "Wrong format, alaphets only";
		valid = false;
		console.log('hey')
	}

	number = number.replaceAll(' ','');

	if(isNaN(number)){
		document.getElementById('number__error').innerText = "Wrong format, numbers only";
		valid = false;
	}

	if(isNaN(month)){
		document.getElementById('date__error').innerText = "Wrong format, numbers only";
		valid = false;
	}

	if(isNaN(year)){
		document.getElementById('date__error').innerText = "Wrong format, numbers only";
		valid = false;
	}

	if(isNaN(cvc)){
		document.getElementById('cvc__error').innerText = "Wrong format, numbers only";
		valid = false;
	}

	if(valid == true){
		form.style.display = 'none';
		success.style.display = 'flex';
	}
})

next.addEventListener('click',function(){
	form.style.display = 'block';
	success.style.display = 'none';
})
