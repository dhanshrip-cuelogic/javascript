
function getData() {

    let uname= document.getElementById("username").value;
    let fname= document.getElementById("fname").value;
    let lname= document.getElementById("lname").value;
    let gender= document.querySelector('input[name="gender"]:checked').value;
    let add= document.getElementById("address").value;
    let pass= document.getElementById("password").value;
    let confirmPass = document.getElementById("confirmPass").value;

    let regexPass= /([A-Z]+)([a-z]?.*)([!@#\$%\^&\*\.].*)([0-9].*)/;

    let todoObj= [];

    let flag = false;

    if(pass!=confirmPass){
        alert("Please type same password in both fields.");
        
    }

    else if(uname=="" || fname==""|| lname==""|| add==""|| pass==""){

        alert("Please fill all the details.");
    }
    else if(pass.length<8){
        alert("length of password should be greater than 8.")    
        
    }
    else if(!(regexPass.test(pass))){
        alert("Invalid Password");
    }
    else{
        flag=true;
    }
    if(flag==true)
    {
        let dataObj= {
            uname:uname,
            fname:fname,
            lname:lname,
            gender:gender,
            add:add,
            pass:pass,
            todoObj: []
        };
    
        let allUser=JSON.parse(localStorage.getItem('values')) || [];
        allUser.push(dataObj);
        localStorage.setItem("values",JSON.stringify(allUser));
        document.getElementById("myform").reset();
        redirect();
    
    }
}
function redirect(){
   window.location.href="./loginIndex.html";
}