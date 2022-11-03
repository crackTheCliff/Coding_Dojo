import React from 'react'
import { useParams } from 'react-router';

const Home = () => {

  const { wordOrNumber, fontColor, backgroundColor } = useParams();

  return (
    <div>
      {
        (!wordOrNumber)
          ? <p> Welcome!!! </p>
          : (!isNaN(wordOrNumber))
            ? <p> The number is: {wordOrNumber} </p>
            : (fontColor || backgroundColor)
              ? <p style={{ color: fontColor, backgroundColor: backgroundColor }}> The word is: {wordOrNumber} </p>
              : <p> The word is: {wordOrNumber} </p>
      }
    </div>
  )
}

export default Home