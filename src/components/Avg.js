import React, {useState} from 'react'
import {Button} from 'react-bootstrap'


const Avg = () => {
    const [primary, setPrimary] = useState(null);
    const [secondary, setSecondary] = useState(null);
const [avg, setAvg] = useState(null)
    function handlePrimary (e) {
        setPrimary(parseInt(e.target.value))
    }
    function handleSecondary (e) {
        setSecondary(parseInt(e.target.value))
    }
    function result () {
      const sum = primary + secondary;
      const res = sum / 2;
        setAvg(res);
    }
  return (
    <div id='comp-body'>
    Result : {avg}
    <br/>
      <input type="number" placeholder="Please enter a number" onChange={handlePrimary} className='form-control'/>
      <br/>
      <input type="number" placeholder="Please enter a number" onChange={handleSecondary} className='form-control'/>
      <br/>
      <Button type="submit" onClick={() => result()} >Submit</Button>
    </div>
  )
}

export default Avg;
