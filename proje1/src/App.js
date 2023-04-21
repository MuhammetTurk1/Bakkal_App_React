import { useState,useEffect } from "react";
import Header from "./components/Header";
import MyBasket from "./components/MyBasket";
import Product from "./Products";
import products from './products.json'

function App() {

const [money, setMoney] = useState(10000)
const [basket, setBasket] = useState([])
const [total, setTotal] = useState(0)


const resetBasket=()=>{
  setBasket([])
}

useEffect(()=>{ 
 

setTotal(basket.reduce((acc,item)=>{

  return acc+(item.amount *(products.find(product=>product.id===item.id).price))
    
  },0))



  },[basket])


  
  return (
    <div className="App">
   
        <Header money={money} total={total}/> 
       <div className="container firstcontainer">
            {
                  products.map(product=>(

                      <Product money={money} amount={basket.amount} total={total} key={product.id} products={products} product={product} 
                      basket={basket} setBasket={setBasket}/>
                  ))
            } 
       </div>
      {
        total > 0 &&(
          <MyBasket products={products} basket={basket} total={total} resetBasket={resetBasket} />
        )
      }
      
 
    </div>
  );
}

export default App;
