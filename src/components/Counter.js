import React, {useState} from 'react'

function Counter() {

  const [counter, setCounter] = useState(0)

  const increase = (counter) => {
    setCounter(counter + 1)
  }

  const reset = () => {
    setCounter(0)
  }

  const decrease = (counter) => {
    setCounter(counter - 1)
  }

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <h1>{counter}</h1>
      </div>

      <div className="row">
        <button className="btn btn-success" onClick={() => increase(counter)}> Increase </button> {' '}
        <button className="btn btn-info" onClick={() => reset()}> Reset </button> {' '}
        <button className="btn btn-danger" onClick={() => decrease(counter)}> Decrease </button> {' '}
      </div>
    </div>
  );
}

export default Counter;
