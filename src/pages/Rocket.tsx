import React, {useState, useEffect} from 'react'
import { apiSettings } from '../axios'

const Rocket = () => {

  useEffect(()=>{
    (async()=>{
      await apiSettings.get('/rockets').then(res=> console.log(res))
    })()
  },[])

  return (
    <div>
      rockets
    </div>
  )
}

export default Rocket
