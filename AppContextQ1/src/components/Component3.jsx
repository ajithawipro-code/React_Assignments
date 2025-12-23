import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Component4 from './Component4'

const Component3 = () => {

    const {a,b} = useContext(AppContext)

  return (
    <div>
          <h4>The value of a is : {a}</h4>
          <h4>The value of b is : {b} </h4>
        <Component4 />
    </div>
  )
}

export default Component3
