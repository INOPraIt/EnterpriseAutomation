import React from 'react'
import { NavLink } from "react-router-dom";
import './Sidebar.scss';
import one from '../../img/iconSidebar/1.png';
import two from '../../img/iconSidebar/2.png';
import three from '../../img/iconSidebar/3.png';
import four from '../../img/iconSidebar/4.png';
import five from '../../img/iconSidebar/5.png';
import six from '../../img/iconSidebar/6.png';
import seven from '../../img/iconSidebar/7.png';
import eight from '../../img/iconSidebar/8.png';
import nine from '../../img/iconSidebar/9.png';
import ten from '../../img/iconSidebar/10.png';
import eleven from '../../img/iconSidebar/11.png';
import twelve from '../../img/iconSidebar/12.png';
import thirteen from '../../img/iconSidebar/13.png';
import fourteen from '../../img/iconSidebar/14.png';

export default function Sidebar() {
  return (
    <div className='containerLinkSidebar'>
      <NavLink to='/' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={one}
          className='imgDivNav1'
        />
        <p className='textNav'>Главная</p>
      </NavLink>
      <NavLink to='/news' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={two}
          className='imgDivNav2'
        />
        <p className='textNav'>Новости</p>
      </NavLink>
      <NavLink to='/notifications' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={three}
          className='imgDivNav3'
        />
        <p className='textNav'>Уведомления</p>
      </NavLink>
      <NavLink to='/payment' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={four}
          className='imgDivNav4'
        />
        <p className='textNav'>Оплата сервиса</p>
      </NavLink>
      <hr
        className='lineOneSidebar'
      />
      <NavLink to='/sales' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={five}
          className='imgDivNav5'
        />
        <p className='textNav'>Продажи</p>
      </NavLink>
      <NavLink to='/sales' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={six}
          className='imgDivNav5'
        />
        <p className='textNav'>Остаток товаров</p>
      </NavLink>
      <NavLink to='/sales' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={seven}
          className='imgDivNav5'
        />
        <p className='textNav'>Статистика</p>
      </NavLink>
      <NavLink to='/sales' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={eight}
          className='imgDivNav5'
        />
        <p className='textNav'>Финансы</p>
      </NavLink>
      <NavLink to='/sales' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={nine}
          className='imgDivNav5'
        />
        <p className='textNav'>Сотрудники</p>
      </NavLink>
      <NavLink to='/sales' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={ten}
          className='imgDivNav5'
        />
        <p className='textNav'>Отзывы клиентов</p>
      </NavLink>
      <NavLink to='/sales' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={eleven}
          className='imgDivNav5'
        />
        <p className='textNav'>Сайты магазина</p>
      </NavLink>
      <NavLink to='/sales' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={twelve}
          className='imgDivNav5'
        />
        <p className='textNav'>Боты магазина</p>
      </NavLink>
      <hr
        className='lineOneSidebar'
      />
      <NavLink to='/sales' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={fourteen}
          className='imgDivNav5'
        />
        <p className='textNav'>Адреса</p>
      </NavLink>
      <NavLink to='/sales' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={fourteen}
          className='imgDivNav5'
        />
        <p className='textNav'>Товары</p>
      </NavLink>
      <NavLink to='/sales' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={thirteen}
          className='imgDivNav5'
        />
        <p className='textNav'>Фото хостинг</p>
      </NavLink>
      <NavLink to='/sales' className={({ isActive }) =>
        isActive ? 'actives' : 'pending'}>
        <img
          src={fourteen}
          className='imgDivNav5'
        />
        <p className='textNav'>Купоны</p>
      </NavLink>
    </div>
  )
}
