import "./styles.css";
import {useState} from 'react'
export default function App() {

  const [lucky, setLucky] = useState();
  const [sum, setSum] = useState(0);
  const [data, setData] = useState("");
  const [color, setColor] = useState("normal-text");

  let sumdate=0;

  const dateChange=(e)=>{
    let removehypen = e.target.value.replaceAll("-","");
    let splitarray = removehypen.split("");
    let numarray = splitarray.map(num=>parseInt(num));
    for(let i=0; i<numarray.length; i++){
      sumdate = numarray[i]+sumdate;
    }
    setSum(sumdate);
  }
  
  const numChange = (e) =>{
    setLucky(parseInt(e.target.value));
  }

const displaymsg = () =>{
  
  if(sum===0){
    setColor("error-text");
    setData("Please enter a valid date");
  }
  else if(lucky<0 || isNaN(lucky)){
    setColor("error-text");
    setData("Please enter a valid lucky number");
  }
  else if(sum%lucky===0){
    setColor("normal-text");
    setData("your birthday is lucky 😃") ;
  }
  else{
    setColor("normal-text");
    setData("Oops 😔  your birthday is NOT lucky");
  }
}

  return (
    <div className="App">
    <h2>Want to check if your birth date is a lucky one?</h2>
    <h3>Please enter your date of birth and your lucky Number</h3>
    <div className= "whole-container">
      <div className="input-field">
        <input className="date-field" type="date" onChange={dateChange} required/>
      </div>
      <div className="input-field">
        <input className="number-field" placeholder='enter your lucky number' onChange={numChange}/>
      </div>
    </div>
    <button onClick={displaymsg}>Start prediction</button>
    <p className={color}>{data}</p>
  </div>
  );
}
