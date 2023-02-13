import React, { useState } from 'react'
import {Button} from 'react-bootstrap'

const Sub = () => {
    const [primary, setPrimary] = useState(null) 
    const [secondary, setSecondary] = useState(null)
    const [sub, setSub] = useState(null)
    const [absSub, setAbsSub] = useState(null)
    function handlePrimary (e) {
        setPrimary(parseInt(e.target.value))
    }
    function handleSecondary (e) {
        setSecondary(parseInt(e.target.value))
    }
    function result () {
        const absRes = Math.abs(primary - secondary) 
        const res = primary - secondary;
        setAbsSub(absRes)
        setSub(res)
    }
  return (
    <div id='comp-body'>
        Absolute result: {absSub}
        <br/> 
      Exact result: {sub} 
      <br/> <br/>
      <input type="number" placeholder='Please enter a number' onChange={handlePrimary} className='form-control'/>
      <br/> <br/>
      <input type="number" placeholder='Please enter a number' onChange={handleSecondary} className='form-control'/>
      <br/> <br/>
      <Button type='submit' onClick={() => result()} >Submit</Button>
    </div>
  )
}

export default Sub
