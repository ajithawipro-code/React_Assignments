import React from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
import Component6  from './Component6'

const Component5 = () => {

    const {f} = useContext(AppContext)
  return (
    <div>
          <h4>The value of f is {f}</h4>
          <Component6 />

    </div>
  )
}

export default Component5
