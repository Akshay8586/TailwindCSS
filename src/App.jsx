/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RevenueCard title={"Amount pending"} amount={"19,310.20"} orderCount={13}></RevenueCard>
    </div>
  )
}

export default App
