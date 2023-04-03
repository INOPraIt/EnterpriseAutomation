import React, { PureComponent } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import style from './CustomTooltip.module.scss';

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart, 
  Bar
} from 'recharts';
import './Home.scss';

const data = [
  {
    name: '01',
    uv: 100000,
    pv: 100000,
    amt: 2400,
  },
  {
    name: '02',
    uv: 3000,
    pv: 120000,
    amt: 2210,
  },
  {
    name: '03',
    uv: 2000,
    pv: 110000,
    amt: 2290,
  },
  {
    name: '04',
    uv: 2780,
    pv: 240000,
    amt: 2000,
  },
  {
    name: '05',
    uv: 1890,
    pv: 150000,
    amt: 2181,
  },
  {
    name: '06',
    uv: 2390,
    pv: 230000,
    amt: 2500,
  },
  {
    name: '07',
    uv: 3490,
    pv: 300000,
    amt: 2100,
  },
  {
    name: '08',
    uv: 3490,
    pv: 270000,
    amt: 2100,
  },
  {
    name: '09',
    uv: 3490,
    pv: 170000,
    amt: 2100,
  },
  {
    name: '10',
    uv: 3490,
    pv: 160000,
    amt: 2100,
  },
  {
    name: '11',
    uv: 3490,
    pv: 330000,
    amt: 2100,
  },
];

const getIntroOfPage = (label) => {
  if (label === '01') {
    return "01 is about men's clothing";
  }
  if (label === '02') {
    return "Page B is about women's dress";
  }
  if (label === '03') {
    return "Page C is about women's bag";
  }
  if (label === '04') {
    return 'Page D is about household goods';
  }
  if (label === '05') {
    return 'Page E is about food';
  }
  if (label === '06') {
    return 'Page F is about baby food';
  }
  return '';
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={style.customTooltip}>
        <p className={style.textNamesMonth}>Апрель 2023</p>
          <p className={style.tooltipDetails}>{`${payload[0].value} - Выручка`}</p>
        
        <p className={style.label}>{getIntroOfPage(label)}</p>
        
      </div>
    );
  }

  return null;
};


export default function Home() {
  return (
    <div className='containerHome'>
      <div className='itemHomeNav'>
        <Sidebar />
      </div>
      <div className='itemHome1'>
        <h2 className='textTenDay'>
          Общая статистика за 10 дней
        </h2>
      </div>
      <div className='itemHome2'>
        <div className='cardStatistic'>
          <div className='blockCardStatistic'>
            <h1 className='priceNum'>
              723 315₽
            </h1>
            <p className='textShop'>
              Выручка магазина
            </p>
          </div>
          <div className='blockCardStatistic'>
            <h1 className='priceSale'>
              2235
            </h1>
            <p className='textSale'>
              Кол-во продаж
            </p>
          </div>
          <div className='blockCardStatistic'>
            <h1 className='priceClients'>
              1 875
            </h1>
            <p className='textClients'>
              Новых клиентов
            </p>
          </div>
        </div>
        <div className='charts'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />}/>
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="rgb(0, 84, 229)"
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
