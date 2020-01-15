function getLogData()
{
    let logname = document.getElementById("username");
    let logpass = document.getElementById("password");

    let regData = JSON.parse(localStorage.getItem("values"));

    for(let i in regData)
    {
        if(regData[i].uname==logname)
        {
            if(regData[i].password==logpass)
            {
                alert("login successful");
                //redirection to todo page
            }
        }
    }
}