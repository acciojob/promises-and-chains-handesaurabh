//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }
 const checkAge = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
  checkAge
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
	
