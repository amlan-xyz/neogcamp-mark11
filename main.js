const date=document.querySelector('#date');
const luckyNo=document.querySelector('#luckyNo');
const button=document.querySelector('.button');
const output=document.querySelector('.output');

function compareValues(sum,luckyNo){
	if(sum%luckyNo===0){
		output.innerText="Your birthday is lucky";
	}else{
		output.innerText="Your birthday is not lucky";
	}
}

function checkBirthday(){
	const dob=date.value;
	const sum=calculateSum(dob);
	if(sum && dob){
		compareValues(sum,luckyNo.value);
	}else{
		output.innerText="Please enter both the fields";
	}
	
}

function calculateSum(dob){
	dob=dob.replaceAll("-","");
	let sum=0;
	for(let index=0;index<dob.length;index++){
		sum+=Number(dob.charAt(index));
	}
	return sum;
}

button.addEventListener('click',checkBirthday);

