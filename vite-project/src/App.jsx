import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Home</h1>
      <p>Exemplo parágrafo</p>
      <h2 className={styles.titulo2}>Exemplo h2</h2>
      <h3>Exemplo h3</h3>
      <label htmlFor = "">Exemplo label</label>
    </div>
  )
}

export default App
