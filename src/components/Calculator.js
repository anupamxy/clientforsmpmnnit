import React, { useState } from 'react';
import './Calculator.css';
function Calculator() {
  function sin(degrees) {
    var radians = degrees * Math.PI / 180;
    return Math.sin(radians);
  }
  function cos(degrees) {
    var radians = degrees * Math.PI / 180;
    return Math.cos(radians);
  }
 
  
  function tan(degrees) {
    var radians = degrees * Math.PI / 180;
    return Math.tan(radians);
  }
  function cot(degrees){
    var radians = degrees * Math.PI / 180;
    return 1/Math.tan(radians);
    
  }
function cosec(degrees) {
    var radians = degrees * Math.PI / 180;
    return 1/Math.sin(radians);
  }
  function sec(degrees) {
    var radians = degrees * Math.PI / 180;
    return 1/Math.cos(radians);
  }
  function abs(x){
    let y=Math.abs(x);
    return y;
  }
  function cbrt(x){
    let y=Math.cbrt(x);
    return y;
  }
  function ceil(x){
    let y=Math.ceil(x);
    return y;
  }
 
  function exp(x){
    let y=Math.exp(x);
    return y;
  }
 
  function expm1(x){
    let y=Math.expm1(x);
    return y;
  }
  function log2(x){
    let y=Math.log2(x);
    return y;
  }
  function log10(x){
    let y=Math.log10(x);
    return y;
  }
 
  function LN2(x){
    let y=Math.LN2(x);
    return y;
  }
 
  

  
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    // setResult(result.concat(e.target.name));
    const buttonValue = e.target.name;
    if (buttonValue === 'sin' || buttonValue === 'cos' ||buttonValue==='tan') {
      setResult(result.concat(`${buttonValue}(`));
    } else if (buttonValue === ')') {
      setResult(result.concat(buttonValue));
    } else {
      setResult(result.concat(buttonValue));
    }
  }
  
  

  const handleClear = () => {
    setResult('');
  }

  const handleBackspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  return (
    <div className="calculator">
      <form>
        <input  type="text" value={result} />
      </form>

      <div className="keypad">
        <button name="1" onClick={handleClick}className='button-85'>1</button>
        <button name="2" onClick={handleClick}className='button-85'>2</button>
        <button name="3" onClick={handleClick}className='button-85'>3</button>
        <button name="4" onClick={handleClick}className='button-85'>4</button>
        <button name="5" onClick={handleClick}className='button-85'>5</button>
        <button name="5" onClick={handleClick}className='button-85'>5</button>
        <button name="6" onClick={handleClick}className='button-85'>6</button>
        <button name="7" onClick={handleClick}className='button-85'>7</button>
        <button name="8" onClick={handleClick}className='button-85'>8</button>
        <button name="9" onClick={handleClick}className='button-85'>9</button>
        <button name="0" onClick={handleClick}className='button-85'>0</button>
        <button name="+" onClick={handleClick} className='button-85'>+</button>
        <button name="-" onClick={handleClick} className='button-85'>-</button>
        <button name="*" onClick={handleClick} className='button-85'>*</button>
        <button name="/" onClick={handleClick} className='button-85'>/</button>
        <button name="." onClick={handleClick} className='button-85'>.</button>
        <button name="%" onClick={handleClick} className='button-85'>%</button>

        <button name="sin" onClick={handleClick} className='button-85'>sin</button>
        <button name="cos" onClick={handleClick} className='button-85'>cos</button>
        <button name="sec" onClick={handleClick} className='button-85'>sec</button>
        <button name="cosec" onClick={handleClick} className='button-85'>cosec</button>
        <button name="cot" onClick={handleClick} className='button-85'>cot</button>
        <button name="tan" onClick={handleClick} className='button-85'>tan</button>
        <button name="(" onClick={handleClick} className='button-85'>(</button>
        <button name=")" onClick={handleClick} className='button-85'>)</button>
        <button name="abs" onClick={handleClick} className='button-85'>abs</button>
        <button name="cbrt" onClick={handleClick} className='button-85'>cbrt</button>
        <button name="ceil" onClick={handleClick} className='button-85'>ceil</button>
        <button name="exp" onClick={handleClick} className='button-85'>e^x</button>
        <button name="expm1" onClick={handleClick} className='button-85'>e^x-1</button>
        <button name="log2" onClick={handleClick} className='button-85'>log(base2)</button>
        <button name="log10" onClick={handleClick} className='button-85'>log(base10)</button>
       
       



        <button onClick={handleClear} id="clear">Clear</button>
        <button onClick={handleBackspace} id="backspace">C</button>
        <button onClick={calculate} id="equals">=</button>
      </div>
      
    </div>
    
  );
}

export default Calculator;
