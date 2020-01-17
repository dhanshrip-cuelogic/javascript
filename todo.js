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
            break;

        }
    } 
showData();

function redirect(){
    window.location.href="./profileIndex.html";
}

function backToLogin(){
    window.location.href="./loginIndex.html";
}

function insertRow(){

    
    let task= document.getElementById("task").value;
    let date= document.getElementById("date").value;
    let check=document.querySelector('input[id="public"]:checked').value;
    let public=document.querySelector('input[id="public"]:checked').value;

    let newData={
        task:task,
        date:date,
        check:check,
        public:public
    };

    // let sessionData = sessionStorage.getItem("values");
    // // alert(sessionData);
    // let localData = JSON.parse(localStorage.getItem("values"));
    // // alert(localData);
    // let data;

    // for(let i of localData)
    // {
    //     if(i.uname==sessionData)
    //     {
    //         data=i;
    //         break;

    //     }
    // } 
  
   // document.getElementById("name").value= data.uname;

    data.todoObj.push(newData);
    localStorage.setItem("values",JSON.stringify(localData));
    // showData();
    

}

function showData(){
    
    // let sessionData = sessionStorage.getItem("values");
    // let localData = JSON.parse(localStorage.getItem("values"));
    let data;
    let todoItems=[];
    let row;

    for(let i of localData)
    {
        if(i.uname==sessionData)
        {
            data=i;
            break;

        }
    } 

    let list = document.getElementById("table");

    todoItems = data.todoObj;

    for(let i=0;i<todoItems.length;i++)
    {
        row = document.createElement('tr');

        row.innerHTML ='<td></td><td>'+ todoItems[i].task +'</td><td>'+ todoItems[i].date +'</td><td></td><td>'+ todoItems[i].reminder +'</td><td>'+ todoItems[i].public +'</td><td></td> ';
        list.appendChild(row);

    }                
}