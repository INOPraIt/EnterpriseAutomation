import React from 'react';
import OneNews from './OneNews';
import './style.scss';

export default function Newser() {

  const arrayNews = [
    {
      id: 1,
      header: 'Уважаемые партнеры!',
      text: `Комиссия в сети Блокчейн достигла невиданных размеров! 
      Пожалуйста, воздержитесь пока от выводов, либо если 
      очень нужно, используйте Бета-вывод с заранее ПРОСЧИТАННЫМИ 
      комиссиями нашей системой! Иначе вы рискуете повесить свои деньги 
      в воздухе!`,
    },
    {
      id: 2,
      header: 'Уважаемые партнеры!',
      text: `Комиссия в сети Блокчейн достигла невиданных размеров! 
      Пожалуйста, воздержитесь пока от выводов, либо если 
      очень нужно, используйте Бета-вывод с заранее ПРОСЧИТАННЫМИ 
      комиссиями нашей системой! Иначе вы рискуете повесить свои деньги 
      в воздухе!`,
    },
    {
      id: 3,
      header: 'Уважаемые партнеры!',
      text: `Комиссия в сети Блокчейн достигла невиданных размеров! 
      Пожалуйста, воздержитесь пока от выводов, либо если 
      очень нужно, используйте Бета-вывод с заранее ПРОСЧИТАННЫМИ 
      комиссиями нашей системой! Иначе вы рискуете повесить свои деньги 
      в воздухе!`,
    },
    {
      id: 4,
      header: 'Уважаемые партнеры!',
      text: `Комиссия в сети Блокчейн достигла невиданных размеров! 
      Пожалуйста, воздержитесь пока от выводов, либо если 
      очень нужно, используйте Бета-вывод с заранее ПРОСЧИТАННЫМИ 
      комиссиями нашей системой! Иначе вы рискуете повесить свои деньги 
      в воздухе!`,
    },
  ]

  return (
    <div>
      {arrayNews.map((v) =>
        <OneNews 
          key={v.id}
          header={v.header}
          text={v.text}
        />
      )}
    </div>
  )
}
