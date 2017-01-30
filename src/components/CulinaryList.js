import React from 'react'

export const CulinaryList = (props) => {
  return props.items ? (
    <ul>
      {props.items.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
  ) : null
}
