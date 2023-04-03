import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import GroupNotions from './components/GroupNotions';

export default function Notifications() {
  return (
    <div className='containerNews'>
      <div className='itemNewsNav'>
        <Sidebar />
      </div>
      <div className='itemNews1'>
        <h2 className='textTenDay'>
          Уведомления
        </h2>
      </div>
      <div className='itemNews2'>
        <div className='newsCard'>
          <GroupNotions />
        </div>
      </div>
    </div>
  )
}
