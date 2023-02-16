const tableBtn = document.getElementById('tableBtn');
const calculateBtn = document.getElementById('calculateBtn');
const employeesList = document.querySelector('.employees__list');

const tablePage = './pages/table.html';
const calculatePage = './pages/calculate.html';

function changeLocation(link) {
  window.location.href = link;
}

let jsonServer = "http://localhost:3004/employees";

fetch(jsonServer)
.then(res => res.json())
.then(data => {
  dataList(data);
})

function dataList(data) {
  employeesList.innerHTML = ``;
  data.forEach(list => {
    const {id, employee_img, employee_name, employee_id, week, number_of_properties, comission_amount, bonus_applied} = list;
    let listBox = document.createElement("div");

    listBox.innerHTML = `
      <div class="list">
        <img src="${employee_img}" alt="employee__img" />
        <div class="employee__info">
          <h2><span class="id__number">${id}.</span> Employee Name:  <span>${employee_name}</span></h2>
        <h2>Employee id: <span>${employee_id}</span></h2>
        <h2>Number of weeks: <span>${week}</span></h2>
        <h2>Number of properties sold by employee: <span>${number_of_properties}</span></h2>
        <h2>The amount of Comission: <span>${comission_amount}</span></h2>
        <h2>Applied Bonus: ${bonus_applied}</h2>
        </div>
      </div>
    `
    console.log(employee_name);
    employeesList.appendChild(listBox)
  });
}

