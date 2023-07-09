import React from 'react'

const CountPositiveFeedbackPercentage = ({positivePercentage}) => {
  return (
    <li>
    <p>Positive feedback: </p>
    <span>{positivePercentage}</span>
  </li>
  )
}

export default CountPositiveFeedbackPercentage