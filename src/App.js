import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Ul = styled.ul`
  list-style: none;
`;

function App() {
  var salary = 15000;
  var supportingPeople = 10;
  var perPerson = salary/supportingPeople;
  var workingDaysPerMonth = 25;
  var workingDaysPerWeek = 6;
  var perPersonPerDay = perPerson/workingDaysPerMonth;
  var perPersonPerWeek = workingDaysPerWeek * perPersonPerDay;
  return (
    <div className="App">
     <h1>Hazrat salary {salary}</h1>
     <p>Number of people supporting hazraat salary {supportingPeople}</p>
     <h2>Per Person</h2>
     <Ul>
      <li>Month {salary/supportingPeople}</li>
      <li>Week { perPersonPerWeek}</li>
      <li>Day({workingDaysPerMonth} working days) {perPersonPerDay}</li>
     </Ul>

     <Button>Hurray</Button>

    </div>
  );
}

export default App;
