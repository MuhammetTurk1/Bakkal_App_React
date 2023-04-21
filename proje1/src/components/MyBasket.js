import React from 'react'
import Basketİtem from './Basketİtem'

function MyBasket({basket ,products,total,resetBasket}) {
  return (
    <div className='container secondcontainer'>
        {
          
            basket.map(item => (
               <Basketİtem key={item.id} item={item} product={products.find(p=>p.id===item.id)}/>
            ))
        }
        <div className='toplamtutartclasss fs-bold'>
          
            Toplam Tutar: {total} TL
        </div>
        <hr />
        <button className='btn btn-danger' onClick={resetBasket}>Sepeti Sıfırla</button>


    </div>
  )
}

export default MyBasket