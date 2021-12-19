import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { Cryptocurrencies, News } from '../components'

import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from './Loader';

const { Title } = Typography;


function Homepage() {

    const { data, isFetching } = useGetCryptosQuery(10);
    const globaStats = data?.data?.stats

     console.log(data);

     if (isFetching) return <Loader />;


    return (
        <>
           <Title level={2} className="heading">Global Crypto Stats</Title>
           <Row>
               <Col span={12}><Statistic title="Total Cryptocurrencies" value={globaStats.total} /></Col>
               <Col span={12}><Statistic title="Total Exchanges" value={millify(globaStats.totalExchanges)} /></Col>
               <Col span={12}><Statistic title="Total Market Cap" value={millify(globaStats.totalMarketCap)} /></Col>
               <Col span={12}><Statistic title="Total 24h Volume" value={millify(globaStats.total24hVolume)} /></Col>
               
               <Col span={12}><Statistic title="Total Markets" value={globaStats.totalMarkets} /></Col>
           </Row>
           <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
           </div>
           <Cryptocurrencies simplified />
           <div className="home-heading-container">
                <Title level={2} className="home-title">Lastest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
           </div>
           <News simplified />
        </>
    )
}

export default Homepage
