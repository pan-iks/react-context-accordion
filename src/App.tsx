import { useState } from 'react'
import './App.css'

import Accordion from './components/accordion/Accordion';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Čau ne</h1>
      <p className="read-the-docs">
        studijní matroš
      </p>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Accordion>
        <Accordion.Item index={0}>
          <Accordion.Header index={0}>Section 1</Accordion.Header>
          <Accordion.Body index={0}>Content of Section 1</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item index={1}>
          <Accordion.Header index={1}>Section 2</Accordion.Header>
          <Accordion.Body index={1}>Content of Section 2</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item index={2}>
          <Accordion.Header index={2}>Section 3</Accordion.Header>
          <Accordion.Body index={2}>Content of Section 3</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item index={3}>
          <Accordion.Header index={3}>Section 4</Accordion.Header>
          <Accordion.Body index={3}>Content of Section 4</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

export default App
