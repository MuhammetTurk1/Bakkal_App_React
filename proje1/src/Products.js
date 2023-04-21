import React from 'react'


function Product({product,basket,setBasket,total,money,}) {
 
  const basketItem =basket.find(item=>item.id===product.id)
  console.log(basketItem)
  
const addBasket=()=>{
  const checkBasket=basket.find(item=>item.id===product.id)
 

if(checkBasket){
  
  checkBasket.amount+=1;
  setBasket([...basket.filter(item=>item.id !==product.id),checkBasket])
  
}else{
  setBasket([...basket,{
    id:product.id,
    amount:1
  }])
}
}

const removeBasket=()=>{
  const currrentBasket=basket.find(item=>item.id===product.id)
  const basketWithoutCurrent =basket.filter(item=>item.id !==product.id)
  currrentBasket.amount-=1;

if(currrentBasket.amount===0){
  setBasket([...basketWithoutCurrent,0])
  
}
else{
  setBasket([...basketWithoutCurrent,currrentBasket])
}

}

  return (
    <div id='proo'>
      <div className='imggg'><img src={product.image} alt="" /></div>
        
        <div className="actions ">
          <h6 className='fs-3'>{product.title}</h6>
          <div className='prices fs-5 pb-2 fw-bold ' >{product.price} TL</div>
          <button className='btncıkrt' disabled={!basketItem} onClick={removeBasket}>Sepetten Çıkart</button>
          <span className="amaount">{(basketItem && basketItem.amount) || 0}</span>
          <button className='btnekle' disabled={(money-total<product.price) } onClick={addBasket}>Sepete Ekle</button>
          
          
        </div>
    </div>
  )
}export default Product


//  disabled={money-total<product.price} || 