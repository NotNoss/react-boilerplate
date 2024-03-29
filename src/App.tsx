import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-2'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="h-24 p-6 hover:drop-shadow-[0_0_32px_rgba(100,108,255,0.67)]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 p-6 hover:drop-shadow-[0_0_32px_rgba(97,218,251,0.67)]" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="p-8">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
