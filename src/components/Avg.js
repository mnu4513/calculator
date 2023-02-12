import React, {useState} from 'react'


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
    <>
    Restlt : {avg}
    <br/>
      <input type="number" placeholder="Please enter a number" onChange={handlePrimary} />
      <br/>
      <input type="number" placeholder="Please enter a number" onChange={handleSecondary} />
      <br/>
      <button type="submit" onClick={() => result()} >Submit</button>
    </>
  )
}

export default Avg;
