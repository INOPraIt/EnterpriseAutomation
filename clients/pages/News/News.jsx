import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './News.scss';
import Newser from './components/Newser';

export default function News() {
  return (
    <div className='containerNews'>
    <div className='itemNewsNav'>
      <Sidebar />
    </div>
    <div className='itemNews1'>
      <h2 className='textTenDay'>
        Новости
      </h2>
    </div>
    <div className='itemNews2'>
      <div className='newsCard'>
        <Newser />
      </div>
    </div>
  </div>
  )
}
