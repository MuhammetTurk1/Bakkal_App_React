import React from 'react'

function Basketİtem({item,product}) {
  return (

    <div><span className='fw-bold'>{product.title}</span> x {item.amount}</div>
    
  )
}

export default Basketİtem