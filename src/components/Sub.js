import React, { useState } from 'react'

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
    <div>
        Absolute result: {absSub}
        <br/> 
      Exact restlt: {sub} 
      <br/> <br/>
      <input type="number" placeholder='Please enter a number' onChange={handlePrimary} />
      <br/> <br/>
      <input type="number" placeholder='Please enter a number' onChange={handleSecondary} />
      <br/> <br/>
      <button type='submit' onClick={() => result()} >Submit</button>
    </div>
  )
}

export default Sub
