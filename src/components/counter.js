import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='counter'>
      <h3>click the button if you like the post</h3>
      <h4>likes: {count}</h4>
      <button onClick={() => setCount(count + 1)}>click me!</button>
    </div>
  )
}

export default Counter
