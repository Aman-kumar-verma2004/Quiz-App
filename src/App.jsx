import './App.css'
import {useState} from "react"
function App() {

  const[questionNumber, setQuestionNumber] = useState(1);

  const moneyPyramid = [
    {id:14, amount : "₹ 7 Crore"},
    {id:13, amount : "₹ 3 Crore"},
    {id:12, amount : "₹ 1 Crore"},
    {id:11, amount : "₹ 50,00,000"},
    {id:10, amount : "₹ 25,00,000"},
    {id:9, amount : "₹ 12,50,000"},
    {id:8, amount : "₹ 6,40,000"},
    {id:7, amount : "₹ 3,20,000"},
    {id:6, amount : "₹ 1,60,000"},
    {id:5, amount : "₹ 80,000"},
    {id:4, amount : "₹ 40,000"},
    {id:3, amount : "₹ 20,000"},
    {id:2, amount : "₹ 10,000"},
    {id:1, amount : "₹ 5,000"},
  ]

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          Questions and answers
        </div>
      </div>
      <div className="pyramid">
        
        <ul className='moneyList'>
        {moneyPyramid.map((m) => (
          <li key={m.id} className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>{m.amount}</li>
        ))}
        
          
        </ul>
      </div>
    </div>
  )
}

export default App
