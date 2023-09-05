import { useState } from "react";
import axios from 'axios';

const Box = () => {
  const [character,setCharacter]=useState('');
  const [error, setError] = useState('');
  const characterHandle=(e)=>{
    const input=e.target.value;

    if (/^\d+(\.\d*)?$/.test(input) || input === '') {
      var decimalRegex=/\./;
      if(decimalRegex.test(input)){
        var changedInput=input*100;
        setCharacter(changedInput);
      }else{
        setCharacter(input);
      }
      setError('');
    } else {
      setError('Please enter numbers only or can have one decimal only.');
    }
  }
  const [from,setFrom]=useState('2');
  const [to,setTo]=useState('3');
  const [result,setResult]=useState('');
  const generateData=async ()=>{
    try{
        const response=await axios.get(`http://localhost:2000/generateData`,{
          params:{
            character:character,
            from:from,
            to:to
          }
        });
        console.log(response);
        setResult(response.data);
    }catch(err){
      console.log(`${err.message}`);
    }
  }
  return (
    <div className="box">
      <div className="container">
        <h1>Binary Magnitude Converter</h1>
        <label htmlFor="" className="character">
          Enter character
        </label>
        <br />
        <input type="text" name="character" id="character" onChange={characterHandle}/>
        <div className="conversion">
          <div className="from">
            <label htmlFor="">From</label><br />
            <select name="leftselect" id="leftselect" onChange={(e)=>setFrom(e.target.value)} value={from}>
              <option value="0">Bytes</option>
              <option value="1">KB</option>
              <option value="2">MB</option>
              <option value="3">GB</option>
              <option value="4">TB</option>
              <option value="5">PB</option>
            </select>
          </div>
          <div className="to">
            <label htmlFor="">To</label><br />
            <select name="rightselect" value={to} id="rightselect" onChange={(e)=>setTo(e.target.value)}>
              <option value="0">Bytes</option>
              <option value="1">KB</option>
              <option value="2">MB</option>
              <option value="3">GB</option>
              <option value="4">TB</option>
              <option value="5">PB</option>
            </select>
          </div>
        </div>
        <label htmlFor="" className="label">Result</label>
        <input type="text" value={result} name="result" id="result" onChange={(e)=>setResult(e.target.value)} readOnly/>
        {error && <p className="error">{error}</p>}
        <button onClick={generateData}>Convert</button>
      </div>
    </div>
  );
};

export default Box;
