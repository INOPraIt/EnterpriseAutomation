import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './ServicePayment.scss';

export default function ServicePayment() {
  return (
    <div className='containerPayment'>
      <div className='itemPaymentNav'>
        <Sidebar />
      </div>
      <div className='itemPayment1'>
        <h2 className='textTenDay'>
          Общая статистика за 10 дней
        </h2>
      </div>
      <div className='itemPayment2'>
        <div className='cardStatistic'>
          <div className='stardantTarifCard'>
            <h1 className='textOneNotion'>
              Стандартный
            </h1>
            <p className='textPOneNotion'>
              Текущий тариф
            </p>
          </div>
          <div className='timeTarifCard'>
            <h1 className='textOneNotion'>
              24 д 15 ч 10 м
            </h1>
            <p className='textPOneNotion'>
              До окончания тарифа
            </p>
          </div>
        </div>
        <div className='blockPayment1'>
          <div className='blockAutoRenewal'>
            <p className='textAutoRenewal'>
              Включить автопродление
            </p>
            <div>
              <input type="checkbox" id="switch" />
              <label for="switch">Toggle</label>
            </div>
          </div>
          <div className='blockFareTerms'>
            <p className='textFareTerms'>
              Условия тарифа: 10% с оборота, фиксированная плата - 10 000₽ при подключении
            </p>
          </div>
          <div className='blockFareTermsButtons'>
            <button className='saleTarif'>
              Оплатить тариф
            </button>
            <button className='changeTarif'>
              Сменить тариф
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}
