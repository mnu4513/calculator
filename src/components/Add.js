import React, {useState} from 'react'


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
    <>
    Restlt : {add}
    <br/>
      <input type="number" placeholder="Please enter a number" onChange={handlePrimary} />
      <br/>
      <input type="number" placeholder="Please enter a number" onChange={handleSecondary} />
      <br/>
      <button type="submit" onClick={() => result()} >Submit</button>
    </>
  )
}

export default Add;
