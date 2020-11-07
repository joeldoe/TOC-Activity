// REGEX for names - ^[a-zA-Z]{1,}$
// REGEX for email - ^[a-z]{1}[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9]{1,20}[.]{1}([a-z]{1,15}[.]{1})?([a-z]{1,5})$
// REGEX for phone no. - ^(\+91)?[6789][0-9]{9}$
// REGEX for password - ^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9_#@%\*\-\&\$\!]{8,}$

	function formValidation()
	{
		let fname = document.getElementsByName('fname')[0].value;
		let lname = document.getElementsByName('lname')[0].value;
		let email = document.getElementsByName('email')[0].value;
		let phone = document.getElementsByName('phone')[0].value;
		let pwd = document.getElementsByName('pwd')[0].value;
		let fnameRegex = /^[a-zA-Z]{1,}$/;
		let lnameRegex = /^[a-zA-Z]{1,}$/;
		let emailRegex = /^[a-z]{1}[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9]{1,20}[.]{1}([a-z]{1,15}[.]{1})?([a-z]{1,5})$/;
		let phoneRegex = /^(\+91)?[6789][0-9]{9}$/;
		let pwdRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[_#@%\*\-\&\$\!\^])[A-Za-z0-9_#@%\*\-\&\$\!\^]{8,}$/;
		
		var val = 0;

		if(fnameRegex.exec(fname))
		{
			val++; 
			console.log(val);
		} 
		else 
		{
			document.getElementById('error1').textContent = 'Invalid name!'; 
		}

		if(lnameRegex.exec(lname))
		{
			val++;	
			console.log(val);
		}
		else
		{
			document.getElementById('error2').textContent = 'Invalid name!';
		}

		if(emailRegex.exec(email))
		{
			 val++;
			 console.log(val);
		}
		else
		{
			document.getElementById('error3').textContent = 'Invalid email!'
		}

		if(phoneRegex.exec(phone))
		{
			val++;	
			console.log(val);
		}
		else
		{
			document.getElementById('error4').textContent = 'Invalid number!';
		}

		if(pwdRegex.exec(pwd))
		{
			val++;
			document.getElementById('error6').textContent = 'Strong password';
			console.log(val);
		}
		else 
		{
			document.getElementById('error5').textContent = 'Weak password';
		}

		if(val === 5)
		{
			document.getElementsByName('fname')[0].value = '';
			document.getElementsByName('lname')[0].value = '';
			document.getElementsByName('email')[0].value = '';
			document.getElementsByName('phone')[0].value = '' ;
			document.getElementsByName('pwd')[0].value = '';
			document.getElementById('error1').textContent = '';
			document.getElementById('error2').textContent = '';
			document.getElementById('error3').textContent = '';
			document.getElementById('error4').textContent = '';
			document.getElementById('error5').textContent = '';
			document.getElementById('error6').textContent = '';
			console.log('submitted');
		}
		else
		{
			console.log('failed');
		}
	}
