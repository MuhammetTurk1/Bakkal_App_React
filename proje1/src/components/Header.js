import React from 'react'
import myfoto from '../images/erdalBakkal.png'

function Header({money,total}) {
  return (
    <div className='headers'>
      <div>
        <img className='erdal my-3' src={myfoto} alt="" />
      </div>
        
         {total > 0 && money-total !==0 && (
              <div className='header'>Harcamak için <span className='spann'>{money-total}</span> TL paranız kaldı!</div>
            )}

             {total === 0 && (
              <div className='header'>Harcamak için <span className='spann'>{money}</span> TL paranız var!</div>
            )}
            {money-total===0 && (
              <div className='header'>Paranız Bitti!</div>
            )}


        
    </div>
  )
}

export default Header