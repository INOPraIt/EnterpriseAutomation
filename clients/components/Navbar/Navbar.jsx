import React from 'react';
import './Navbar.scss';
import one from '../../img/icon/1.png';
import two from '../../img/icon/2.png';
import three from '../../img/icon/3.png';
import four from '../../img/icon/4.png';

export default function Navbar() {
  return (
    <div>
    <div className='navContainer'>
      <div className='itemTitles'>
        <h2 className='nameMarket'>
          Название магазина
        </h2>
      </div>
      <div className='itemCurrencies'>
        <div className='blockImgOne'>
          <img
            src={one}
            className='imgIconAStyle'
          />
          <p 
            className='textIconFramer'
          >1 231 462.7₽</p>
        </div>
        <div className='blockImgOne'>
          <img
            src={two}
            className='imgIconAStyle'
          />
          <p 
            className='textIconFramer'
          >71.3₽</p>
        </div>
        <div className='blockImgOne'>
          <img
            src={three}
            className='imgIconAStyle'
          />
          <p 
            className='textIconFramer'
          >8 738,3₽</p>
        </div>
        <div className='blockImgOne'>
          <img
            src={four}
            className='imgIconAStyle'
          />
          <p 
            className='textIconFramer'
          >5859.6₽</p>
        </div>
      </div>
      <div className='itemItems'>
        <div className='blockSupport'>
          <p className='textItems'>Поддержка</p>
          <p className='textItems'>Инструкция</p>
          <p className='textItems'>Сменить пароль</p>
        </div>
        <button className='btnOnes'>
            Выйти
          </button>
      </div>
    </div>
    <hr className='lineNavbar'/>
    </div>
  )
}
