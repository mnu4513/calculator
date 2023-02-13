import React, { useState } from 'react'
import {Button} from 'react-bootstrap'

const Div = () => {
    const [primary, setPrimary] = useState(null)
    const [secondary, setSecondary] = useState(null);
    const [div, setDiv] = useState(null);
    function handlePrimary (e) {
        setPrimary(parseInt(e.target.value))
    }
    function handleSecondary (e) {
        setSecondary(parseInt(e.target.value))
    }
    function result () {
        const res = primary / secondary;
        setDiv(res)
    }
  return (
    <div id='comp-body'>
      Result: {div}
      <br/> <br/>
      <input type="number" placeholder='Please enter a number' onChange={handlePrimary} className='form-control'/>
      <br/> <br/>
      <input type="number" placeholder='Please enter a number' onChange={handleSecondary} className='form-control'/>
      <br/> <br/>
      <Button type='submit' onClick={() => result()} >Submit</Button>
    </div>
  )
}

export default Div
