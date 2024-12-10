import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../assets/scss/component/news/navTabs.scss'
import { Row } from 'react-bootstrap';
import NewsCard from './NewsCard';

const NavTabs = () => {

    const [key,setKey] =  useState('all')

  return (
    <>
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="ct-tabs"
    >
      <Tab eventKey="all" title="all">
        <Row>
            <NewsCard/>
        </Row>
      </Tab>
      <Tab eventKey="real-estate" title="real estate">
        Tab content for real estate
      </Tab>
      <Tab eventKey="stocks" title="stocks">
        Tab content for stocks
      </Tab>
      <Tab eventKey="mutual-funds" title="mutual funds">
        Tab content for mutual funds
      </Tab>
      <Tab eventKey="crypto" title="crypto">
        Tab content for crypto
      </Tab>
    </Tabs>
    </>
  )
}

export default NavTabs