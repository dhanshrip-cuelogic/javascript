let sessionData = sessionStorage.getItem("values");
let localData = JSON.parse(localStorage.getItem("values"));
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
    let category= document.getElementById("category").value;
    let check=document.querySelector('input[id="check"]:checked').value;
    let public=document.querySelector('input[id="public"]:checked').value;
    
    // let check=document.getElementById("check").checked;
    // let public=document.getElementById("public").checked;

    let newData={
        task:task,
        date:date,
        check:check,
        public:public
    };
  
   // document.getElementById("name").value= data.uname;

    data.todoObj.push(newData);
    localStorage.setItem("values",JSON.stringify(localData));
    clearList();
    showData();
    

}

function showData(){
    
    let todoItems=[];
    let row;
    let list = document.getElementById("table");

    todoItems = data.todoObj;

    for(let i=0;i<todoItems.length;i++)
    {
        row = document.createElement('tr');


        row.innerHTML ='<td><input type="checkbox" id="markDone" value="Yes"></td><td>'+ todoItems[i].task +'</td><td>'+ todoItems[i].category +'</td><td>'+ todoItems[i].date +'</td><td>'+getStatus()+'</td><td>'+ todoItems[i].reminder +'</td><td>'+ todoItems[i].public +'</td><td><input type="button" value="Edit" onclick=()></td>';
        list.appendChild(row);

    }                
}

function clearList(){
    document.getElementById("table").innerHTML="";
}

function deleteTask()
{
    let tableData=document.getElementById("table")
    let allCheckedData=tableData.getElementsByTagName("input");
    for(let i=allCheckedData.length-1; i >= 0; i--)
    {
        if(allCheckedData[i].checked)
        {
            document.getElementById("table").deleteRow(i);
            data.todoObj.splice(i,1);
        }

    }
    localStorage.setItem("values",JSON.stringify(localData));

}

function getStatus(){
    let 
    if()
}