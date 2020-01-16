
let sessionData = sessionStorage.getItem("values");
// alert(sessionData);
let localData = JSON.parse(localStorage.getItem("values"));
// alert(localData);
let data;

for(let i of localData)
{
    if(i.uname==sessionData)
    {
        data=i;

    }
}   
let uname=data.uname;
let pass=data.pass;
let add=data.add;
let fname=data.fname;
let lname=data.lname;
let gender=data.gender;

document.getElementById("uname").value=uname;
document.getElementById("pass").value=pass;
document.getElementById("fname").value=fname;
document.getElementById("lname").value=lname;
document.getElementById("gender").value=gender;
document.getElementById("add").value=add;
   