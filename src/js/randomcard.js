let visitedEmployee=[]
const divContainer=document.querySelector(".container");
const history=document.getElementById("historylog")
let previousEmployee=[]
const random_card=(team)=>{
    if (visitedEmployee.length===team.length){
        divContainer.innerHTML=""
        visitedEmployee=[]
        previousEmployee=[]
    }
    // if employee in visitedemlpoyee than again loop until it is not
    employee=team[Math.floor(Math.random()*team.length)]
    while (visitedEmployee.includes(employee["empid"])){
        employee=team[Math.floor(Math.random()*team.length)]
    }
    previousEmployee.push(employee)
    visitedEmployee.push(employee["empid"]);
    return employee
}

const addEmployeetoDom=()=>{
    // generate employee
    employee=random_card(team);
    // create markup
    employeemarkup=createDiv(employee)
    //  add markup to dom
    displayEmployee(employeemarkup,employee)
}



displayEmployee=(emp,employee)=>{
    console.log(employee);
    if(visitedEmployee[visitedEmployee.length-2]){
        divContainer.innerHTML=emp+`<table style="border:2px solid black;">
        <tr>
        <th colspan="3" style="text-align:center">Last Employee Selected</th>
        </tr>
          <tr>
            <th >EmployeeId</th>
            <th>Name</th>
            <th>Company Name</th>
          </tr>
          <tr>
            <td>${visitedEmployee[visitedEmployee.length-2]}</td>
            <td>${previousEmployee[previousEmployee.length-2]["name"]}</td>
            <td>${previousEmployee[previousEmployee.length-2]["company"]}</td>
          </tr>
        
        </table>`;
    }else{
        divContainer.innerHTML=emp
    }
}


 
createDiv=(emp)=>{    
    return ` <div class="card" style="width: 18rem;margin-top:30px;border:2px solid black;">
    <div class="card-body">
    <img class="card-img-top" src="${emp["image"]}" alt="Card image cap" > 
      <h3 class="card-title">${emp["name"]}</h3>
      <p class="card-text">${emp["company"]}</p>
    </div>
  </div>`
}

const modal=document.getElementById("exampleModal");

const generateCard=document.getElementById("generateRandom");
generateCard.addEventListener('click',addEmployeetoDom);

const confirmDelete=()=>{
    const deletebutton=document.getElementById("deleteButton");
    deletebutton.innerHTML=`<button class="btn btn-danger" onclick="deleteCard(event)">Yes</button `
    modal.style.display="block";

}

closeModal=()=>{
    modal.style.display="none";
}

deleteCard=()=>{
    divContainer.innerHTML="";
    visitedEmployee=[];
    modal.style.display="none";
}

const reset=document.getElementById("reset");
reset.addEventListener('click',confirmDelete);
let theme="light";
function DarkMode(){
    const modal=document.querySelector(".modal");
    const body=document.getElementsByTagName("body")[0];
    const card=document.getElementsByClassName("container")[0];
    if(theme=="light"){
        body.classList.add("dark")
        card.classList.add("darkcard")
        modal.classList.add("darkmodal")
        theme="dark";
    }else{
        body.classList.remove("dark")
        card.classList.remove("darkcard")
        theme="light";
    }
    

   
}