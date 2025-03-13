import './App.css'
import {useState, useEffect} from "react"
import Quiz from "./Components/Quiz"
import Timer from "./Components/Timer"



function App() {

  const[questionNumber, setQuestionNumber] = useState(1);
  const[stop, setStop] = useState(false)
  const[earned, setEarned] = useState("₹ 0");
  const[userName, setUserName] = useState(null)

  const data = [
    {
      id: 1,
      question: "What does HTML stand for?",
      answers: [
        { text: "HyperText Markup Language", correct: true },
        { text: "HyperText Machine Language", correct: false },
        { text: "HyperTransfer Markup Language", correct: false },
        { text: "HighText Markup Language", correct: false }
      ]
    },
    {
      id: 2,
      question: "Which of these is a JavaScript framework?",
      answers: [
        { text: "Laravel", correct: false },
        { text: "React", correct: true },
        { text: "Django", correct: false },
        { text: "Flask", correct: false }
      ]
    },
    {
      id: 3,
      question: "Which company developed the Python language?",
      answers: [
        { text: "Microsoft", correct: false },
        { text: "Sun Microsystems", correct: false },
        { text: "Google", correct: false },
        { text: "Python Software Foundation", correct: true }
      ]
    },
    {
      id: 4,
      question: "Which of these is a NoSQL database?",
      answers: [
        { text: "MySQL", correct: false },
        { text: "PostgreSQL", correct: false },
        { text: "MongoDB", correct: true },
        { text: "SQLite", correct: false }
      ]
    },
    {
      id: 5,
      question: "What is the time complexity of binary search?",
      answers: [
        { text: "O(n)", correct: false },
        { text: "O(log n)", correct: true },
        { text: "O(n log n)", correct: false },
        { text: "O(1)", correct: false }
      ]
    },
    {
      id: 6,
      question: "Which protocol is used to send emails?",
      answers: [
        { text: "FTP", correct: false },
        { text: "HTTP", correct: false },
        { text: "SMTP", correct: true },
        { text: "TCP", correct: false }
      ]
    },
    {
      id: 7,
      question: "What does SQL stand for?",
      answers: [
        { text: "Structured Query Language", correct: true },
        { text: "Standard Question Language", correct: false },
        { text: "Sequential Query Language", correct: false },
        { text: "Structured Question Language", correct: false }
      ]
    },
    {
      id: 8,
      question: "Which JavaScript framework is maintained by Meta?",
      answers: [
        { text: "Vue", correct: false },
        { text: "Angular", correct: false },
        { text: "React", correct: true },
        { text: "Svelte", correct: false }
      ]
    },
    {
      id: 9,
      question: "Which of these is a backend language?",
      answers: [
        { text: "JavaScript", correct: false },
        { text: "HTML", correct: false },
        { text: "Python", correct: true },
        { text: "CSS", correct: false }
      ]
    },
    {
      id: 10,
      question: "Which of these is not a programming language?",
      answers: [
        { text: "Python", correct: false },
        { text: "Java", correct: false },
        { text: "HTML", correct: true },
        { text: "C++", correct: false }
      ]
    },
    {
      id: 11,
      question: "What is the default port for HTTP?",
      answers: [
        { text: "80", correct: true },
        { text: "443", correct: false },
        { text: "22", correct: false },
        { text: "8080", correct: false }
      ]
    },
    {
      id: 12,
      question: "Which company created the C programming language?",
      answers: [
        { text: "Microsoft", correct: false },
        { text: "IBM", correct: false },
        { text: "Bell Labs", correct: true },
        { text: "Apple", correct: false }
      ]
    },
    {
      id: 13,
      question: "What is the output of 3 + '3' in JavaScript?",
      answers: [
        { text: "6", correct: false },
        { text: "33", correct: true },
        { text: "Error", correct: false },
        { text: "NaN", correct: false }
      ]
    },
    {
      id: 14,
      question: "Which of these is a NoSQL database?",
      answers: [
        { text: "MySQL", correct: false },
        { text: "MongoDB", correct: true },
        { text: "PostgreSQL", correct: false },
        { text: "SQLite", correct: false }
      ]
    },
    {
      id: 15,
      question: "Which tag is used to define an unordered list in HTML?",
      answers: [
        { text: "<ol>", correct: false },
        { text: "<ul>", correct: true },
        { text: "<li>", correct: false },
        { text: "<list>", correct: false }
      ]
    }
  ]

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

  useEffect(()=> {
    questionNumber > 1 && 
    setEarned(moneyPyramid.find(m => m.id === questionNumber -1).amount)
  },[questionNumber, moneyPyramid])

  return (
    <div className="app">
      
      <div className="main">
        {stop ? <h1 className='endText'>You Earned : {earned} </h1> : (
          <>
          <div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
        </div>
        <div className="bottom">
          <Quiz data= {data} questionNumber={questionNumber} setQuestionNumber= {setQuestionNumber} setStop={setStop}   />
        </div>
          </>
        )}
        
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
