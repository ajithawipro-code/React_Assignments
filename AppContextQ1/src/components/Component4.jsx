import React , {useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Component5 from './Component5'


const Component4 = () => {

    const { c,d,e,f } = useContext(AppContext)

  return (
    <div>
         <h4> The value of c is {c}</h4>
         <h4> The value of d is {d} </h4>
      <Component5 />

    </div>
  )
}

export default Component4
