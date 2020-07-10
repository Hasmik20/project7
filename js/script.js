//------------------------Bell notification-----------------------

const bell = document.getElementById('bell-container');
const bellDot = document.querySelector('.dot');
const bellNotific = document.getElementById('notifications');


let notList =['Victoria C. commented on FB','Final Report', 'Staff meeting'];

//create unorderd list for notification

const addList = () =>{
    let ulList = document.createElement('ul');
    ulList.classList.add( "ulList");
    for(let i= 0; i < notList.length; i++){
        ulList.innerHTML += `<li> ${notList[i]} <span>x</span> </li>`
    }
        return ulList;
} 

const closeBox = addList (notList)
bellNotific.appendChild(closeBox)


closeBox.addEventListener('click', e =>{
    if(e.target.textContent === 'x'){
        const element = e.target;
        const parent = element.parentNode;
        setTimeout(function(){
            parent.style.display = 'none';
           }, 200);  
    }
})

  //open notification with addEventListener 
 
bellDot.addEventListener('click', () => {
    setTimeout(function(){
    bellNotific.style.opacity = '1';
    bellDot.style.display = 'none'; 
    },500);                     
  });
// //------------------------ Alert banner--------------------------

const alertBanner = document.getElementById("alert");

// //create the html for the banner

alertBanner.innerHTML = `<div class="alert-banner">
                         <p><strong>Alert:</strong>You have <strong>6</strong> overdue tasks to complete</p>
                        <p class="alert-banner-close">X</p>
                       </div>`
  let pointer = document.querySelector('.alert-banner-close')
  pointer.style.cursor = "pointer";
    
  //close with addEventListener 
 alertBanner.addEventListener('click', e => { 
     const element = e.target;
     
    if(element.classList.contains("alert-banner-close")){
         setTimeout(function(){
             
            alertBanner.style.display = "none";
           }, 200);
        
     };   
 });


    
//--------------------------message send ----------------------
// messaging widget 

const user = document.querySelector(".form-field");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    //ensure user and message fields are filled out
    if(user.value === "" && message.value === ""){
        alert("Please fill out user and message fields before sending");
    }else if(user.value === ""){
        alert("Please fill out user before sending");
    }else if(message.value === ""){
        alert("Please fill out message field before sending ");
    }else{
        alert(`Message successfully sent to: ${user.value}`);
    }
});


/*------------------------------Search ----------------*/

const names = ['Victoria Chambers', 'Dave Bird','Down Wood', 'Dan Oliver']
  
 
function findName(value) { 
  document.getElementById('datalist').innerHTML = ''; 
   //setting datalist empty at the start of function 
   //if we skip this step, same name will be repeated 
     

   //input query length 
for (let i = 0; i<names.length; i++) { 
   if(((names[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) 
   { 
       //comparing if input string is existing in names[i] string 

       let option = document.createElement("option"); 
       let nameList = document.createTextNode(names[i]); 
        option.appendChild(nameList); 

         document.getElementById("datalist").appendChild(option); 
             //creating and appending new elements in data list 
       } 
   } 
} 



//---------------------------------localstorage---------------
//local setting widget 

let emailInput = document.getElementById('emailInput');
let publicInput = document.getElementById('publicInput');
let timezone = document.getElementById('timezone');

 let save = document.getElementById('save');
 let cancel = document.getElementById('cancel');

 
 let emailLocal = localStorage.getItem("email");
    if(emailLocal && emailLocal === "true"){
        emailInput.checked = true;
    }else{
        emailInput.checked = false;
    }
let publicLocal = localStorage.getItem("public");
    if(publicLocal && publicLocal === "true"){
        publicInput.checked = true;
    }else{
        publicInput.checked = false;
    }

    timezone.value = localStorage.getItem("timezone");

    save.addEventListener('click', () =>{
        event.preventDefault();
       localStorage.setItem("email", emailInput.checked);
       localStorage.setItem("public", publicInput.checked);
       localStorage.setItem("timezone", timezone.value);
       alert('Your changes successfully saved!');
       location.reload();
    })

    cancel.addEventListener('click', () =>{
        event.preventDefault();
        localStorage.clear();
        alert('Your changes successfully removed!')
        location.reload();
    })