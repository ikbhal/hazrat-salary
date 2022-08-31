import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
//https://www.npmjs.com/package/reactjs-simple-table
// import SimpleTableComponent from "reactjs-simple-table";
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
`;

function HazratSalaryCalculator() {
  var salary = 15000;
  var [supportingPeople,setSupportingPeople] = useState(10);
  var perPerson = salary/supportingPeople;
  var workingDaysPerMonth = 25;
  var workingDaysPerWeek = 6;
  var perPersonPerDay = Math.round(perPerson/workingDaysPerMonth);
  var perPersonPerWeek = Math.round(workingDaysPerWeek * perPersonPerDay);
  var perPersonPerMonth = Math.round(salary/supportingPeople);

  const columns = [
    {
      field: "Duration",
      headerName: "duration",
    },
    {
      field: "amount",
      headerName: "Amount",
    },
  ];

  var list = [{amount: perPersonPerMonth, 'duration': 'Month'},
    {amount: perPersonPerWeek, 'duration': 'Week'},
    {amount: perPersonPerDay, 'duration': 'Day'}];

  return (
    <div className="App">
     <h1>Hazrat salary {salary}</h1>
     <p>Number of people supporting hazraat salary {supportingPeople}</p>
     <input type="range" min="1" max="100" 
      value={supportingPeople}
      onChange = {e=> setSupportingPeople(e.target.value)}
      className="slider" id="myRange"/> <br/>
     <h2>Per Person</h2>
     <Ul>
      <li>Month {perPersonPerMonth}</li>
      <li>Week { perPersonPerWeek}</li>
      <li>Day({workingDaysPerMonth} working days) {perPersonPerDay}</li>
     </Ul>

     {/* not working <SimpleTableComponent columns={columns} list={list} /> */}

    </div>
  );
}

export default HazratSalaryCalculator;

