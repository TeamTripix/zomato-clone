import React from 'react'
import "./style.scss"

function Index(props) {
  const name = props.name
  return (
    <>
        <div className='box'>
          <h5>{name.length <=  25 ? name : `${name.slice(0,25)}...` }</h5>
        </div>
    </>
  )
}

export default Index