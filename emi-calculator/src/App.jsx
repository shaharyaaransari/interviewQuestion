import { useState } from 'react'

import { Factorial } from './component/Factorial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Factorial/>
    </>
  )
}

export default App
