/***********************Login************************* */
  
function login(form)
{
  var uname = document.getElementById("email").value;
  var pwd = document.getElementById("pwd").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  if(uname == "annie1391@gmail.com" && pwd == "annies")
  {
    window.open('studentForm.html');
  }
  
  else if(uname =='')
  {
    alert("please enter user name.");
  }
  else if(pwd=='')
  {
        alert("enter the password");
  }
  else if(!filter.test(uname))
  {
    alert("Enter valid email id.");
  }
  else if(pwd.length < 6 || pwd.length > 6)
  {
    alert("Password min and max length is 6.");
  }
  else{
    alert("Incorrect Password or Username")
  }
 
}		

/**********************************Student Info************************************************ */

function student(form){
let name = document.getElementById("stud").value;
let fatherName = document.getElementById("studFather").value;
let motherName = document.getElementById("studMother").value;
let standard = document.getElementById("standard").value;
let schoolName = document.getElementById("schName").value;
let date = document.getElementById("date").value;
let age = parseInt(document.getElementById("age").value);
let address = document.getElementById("address").value;


let letters = /^[A-Za-z]+$/;
let  addlet = /^[0-9a-zA-Z]+$/;

if ((!name.match(letters)) || (!fatherName.match(letters)) || (!motherName.match(letters)) )
{
  alert('Username must have alphabet characters only');
  }
  else if(standard=="default"){
    alert('Select your country from the list');
  }
  else if (schoolName==""){
 alert("Please enter the school name");
  }
  else if(!date){
    alert("Empty Date");
  }
  else if(age < 1 || age > 100 ){
alert ("plese enter your age")
}
else if(!address.match(addlet)){
  alert("please type your address")
}
else{
window.open("parentsInfo.html")
return true;
}
}

/***********************************Parent Info**************************************************** */

let parentInfo = () => {
    	
  // Get the data from each element on the form.
  let name = document.getElementById('fatherName');
  let fatEmail = document.getElementById('fatherEmail');
  let fatherJob = document.getElementById('fatherJob');
  let address = document.getElementById('address');
  let motherName = document.getElementById('motherName');
  let motherEmail = document.getElementById('motherEmail');
  let mobile = document.getElementById('mobile');
  let motherJob = document.getElementById('motherJob');


  // This variable stores all the data.
  var phoneno = /^\d{10}$/;
  if(!mobile.value.match(phoneno))
        {
     alert("Please type correct number")
        }
        else{
  let data = 
      '\r Father Name: ' + name.value + ' \r\n ' + 
      'Father Email: ' +fatEmail.value + ' \r\n ' + 
      'Father Job: ' + fatherJob.value + ' \r\n ' + 
      'Address: ' + address.value + ' \r\n ' + 
      'Mother Name: ' + motherName.value + ' \r\n ' + 
      'Mother Email: ' + motherEmail.value + ' \r\n ' + 
      'Mother Mobile: ' + mobile.value + ' \r\n ' + 
      'Mother Job: ' + motherJob.value;
  
  // Convert to txt
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'formData.txt';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
  }

  newLink.click(); 
}
}

