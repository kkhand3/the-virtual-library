import { useState } from 'react'
import Landing from './components/Landing'
import Library from './components/Library'

function App() {
  const [screen, setScreen] = useState('landing')

  return (
    <div>
      {screen === 'landing' && <Landing onEnter={() => setScreen('library')} />}
      {screen === 'library' && <Library />}
    </div>
  )
}

export default App