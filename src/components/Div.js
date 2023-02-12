import React, { useState } from 'react'

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
    <div>
      Restlt: {div}
      <br/> <br/>
      <input type="number" placeholder='Please enter a number' onChange={handlePrimary} />
      <br/> <br/>
      <input type="number" placeholder='Please enter a number' onChange={handleSecondary} />
      <br/> <br/>
      <button type='submit' onClick={() => result()} >Submit</button>
    </div>
  )
}

export default Div
