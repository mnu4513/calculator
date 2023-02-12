import React, { useState } from 'react'

const Mul = () => {
    const [primary, setPrimary] = useState(null)
    const [secondary, setSecondary] = useState(null)
    const [mul, setMul] = useState(null);
    function handlePrimary (e) {
        setPrimary(parseInt(e.target.value))
    }
    function handleSecondary (e) {
        setSecondary(parseInt(e.target.value))
    }
    function result () {
        const res = primary * secondary;
        setMul(res)
    }
  return (
    <>
        Restlt: {mul}
        <br/> <br/>
        <input type="number" placeholder='Please enter a number' onChange={handlePrimary} />
        <br/> <br/>
        <input type="number" placeholder='Please enter a number' onChange={handleSecondary} />
        <br/> <br/>
        <button type="submit" onClick={() => result()}>Submit</button>
    </>
  )
}

export default Mul

