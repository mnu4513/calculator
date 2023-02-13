import React, {useState} from 'react'
import {Button} from 'react-bootstrap'


const Add = () => {
    const [primary, setPrimary] = useState(null);
    const [secondary, setSecondary] = useState(null);
const [add, setAdd] = useState(null)
    function handlePrimary (e) {
        setPrimary(parseInt(e.target.value))
    }
    function handleSecondary (e) {
        setSecondary(parseInt(e.target.value))
    }
    function result () {
      const res = primary + secondary;
        setAdd(res);
    }
  return (
    <div id='comp-body'>
    Result : {add}
    <br/>
      <input type="number" placeholder="Please enter a number" onChange={handlePrimary} className='form-control'/>
      <br/>
      <input type="number" placeholder="Please enter a number" onChange={handleSecondary} className='form-control'/>
      <br/>
      <Button type="submit" onClick={() => result()} >Submit</Button>
    </div>
  )
}

export default Add;
