let visitedEmployee=[]
const divContainer=document.querySelector(".container");


const random_card=(team)=>{
    if (visitedEmployee.length===team.length){
        divContainer.innerHTML=""
        visitedEmployee=[]
    }
    // if employee in visitedemlpoyee than again loop until it is not
    employee=team[Math.floor(Math.random()*team.length)]
    while (visitedEmployee.includes(employee["empid"])){
        employee=team[Math.floor(Math.random()*team.length)]
    }
    
    visitedEmployee.push(employee["empid"]);
    return employee
}

const addEmployeetoDom=()=>{
    // generate employee
    employee=random_card(team);
    // create markup
    employeemarkup=createDiv(employee)
    //  add markup to dom
    displayEmployee(employeemarkup)
}



displayEmployee=(emp)=>{
    divContainer.innerHTML=emp;
}

 
createDiv=(emp)=>{    
    return ` <div class="card" style="width: 18rem;border:2px solid black;border-radius:10px;margin-top:30px;">
    <div class="card-body">
    <img class="card-img-top" src="https://niravkpatel28.github.io/github-image-repository/profiles/image-pexels-photo-2379004.jpeg" alt="Card image cap" > 
      <h3 class="card-title">${emp["name"]}</h3>
      <p class="card-text">${emp["company"]}</p>
    </div>
  </div> `
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

