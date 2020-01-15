
function getData() {

    let uname= document.getElementById("username").value;
    let fname= document.getElementById("fname").value;
    let lname= document.getElementById("lname").value;
    let gender= document.getElementsByClassName("radio").value;
    let add= document.getElementById("address").value;
    let pass= document.getElementById("password").value;

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
    redirection();
}

function redirection() {
    window.location("/home/cuelogic.local/dhanshri.pawar/js/loginIndex.html");
}
