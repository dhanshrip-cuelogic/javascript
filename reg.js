
function getData() {

    let uname= document.getElementById("username").value;
    let fname= document.getElementById("fname").value;
    let lname= document.getElementById("lname").value;
    let gender= document.querySelector('input[name="gender"]:checked').value;
    let add= document.getElementById("address").value;
    let pass= document.getElementById("password").value;
    let confirmPass = document.getElementById("confirmPass").value;

    let flag = true;

    if(pass!=confirmPass){
        alert("Please type same password in both fields.");
        flag=false;
        
    }

    if(uname=="" || fname==""|| lname==""|| add==""|| pass==""){

        alert("Please fill all the details.");
        flag=false;
    }

    if(flag==true)
    {
        let dataObj= {
            uname:uname,
            fname:fname,
            lname:lname,
            gender:gender,
            add:add,
            pass:pass
        };
    
        let allUser=JSON.parse(localStorage.getItem('values')) || [];
        allUser.push(dataObj);
        localStorage.setItem("values",JSON.stringify(allUser));
        document.getElementById("myform").reset();
    
    }
    
}
