import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ type }) => {
  return (
    <div className={styles.test}>
      <button type={type}> Button Type : {type}</button>
    </div>
  )
}
