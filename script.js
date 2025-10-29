//your JS code here. If required.
document.getElementById("myForm").addEventListener(function (e))
e.preventDefault();
const name=document.getElementById("name");
const age=document.getElementById("age");
if (name==="" || age==="") {
	alert("Please enter valid details.");
	return;
}

const age=()=>{
	return new Promise(resolve,reject)=>{
		setTimeout(()=>{
			if (age>=18) {
				resolve("Welcome, . You can vote.")
			} else {
				reject("Oh sorry . You aren't old enough.")
			}
		},4000)
	}
	age
	.then((message)=>alert(message))
	.catch((error)=>alert(error))
}
	
