import React, { useEffect, useState } from 'react'

function App() {
  let [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      let time = new Date();
      setClockState(time.toLocaleTimeString());  
    }, 1000)
  })
  return (
    <div className='container'>
      <p>{clockState}</p>
    </div>
  )
}

export default App