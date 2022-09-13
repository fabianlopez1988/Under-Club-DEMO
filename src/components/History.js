import React from 'react'
import LoremIpsum from 'react-lorem-ipsum'
import "./History.css"

const History = () => {
  return (
    <div className='history-container'>
        <h1 id="/history">
            HISTORIA
        </h1>
        <LoremIpsum />
        <LoremIpsum />
        <h2>
            CULTURA
        </h2>
        <LoremIpsum />
        <LoremIpsum />
        <h2>
            HITOS
        </h2>
        <LoremIpsum />
        <LoremIpsum />
    </div>
  )
}

export default History