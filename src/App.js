import React from "react"
import './App.css';
import {Layout, Menu} from 'antd';
import { useEffect, useState } from 'react';
import {PAGENAME} from './constants/PageConstants'
import {HomePage} from './Components/HomePage.js'
import {StartersPage} from './Components/StartersPage.js'
import { AddRecipesPage} from "./Components/AddRecipesPage.js";
import { DessertsPage} from "./Components/DessertsPage.js";
import { Wave } from 'react-animated-text';
import {EntreesPage} from './Components/EntreesPage.js'
import {SecretRecipesPage} from './Components/SecretRecipesPage.js'
const { Header, Content, Footer } = Layout;
const items = new Array(6).fill(null).map((_, index) => ({
  key: index + 1,
  label: `${PAGENAME['PAGE_'+(index+1)]}`,
}));

function App() {
  const [selectedPage, setSelectedPage] = useState(PAGENAME.PAGE_1); 

  useEffect(() => {
    console.log(selectedPage)
  }, [selectedPage])
  const onPageClick = (e) => {
    console.log(e)
    console.log(e.key)
    
    if (e.key == 1) {
      setSelectedPage(PAGENAME.PAGE_1)
    }
    if (e.key == 2) {
      setSelectedPage(PAGENAME.PAGE_2)
    }
    if (e.key == 3) {
      setSelectedPage(PAGENAME.PAGE_3)
    }
    if (e.key == 4) {
      setSelectedPage(PAGENAME.PAGE_4)
    }
    if (e.key == 5) {
      setSelectedPage(PAGENAME.PAGE_5)
    }
    if (e.key == 6) {
      setSelectedPage(PAGENAME.PAGE_6)
    }
  }
const PageBody = () => {
  console.log(selectedPage)
  if (selectedPage === PAGENAME.PAGE_1) {
    return (
      <HomePage />
    )
  } else if (selectedPage === PAGENAME.PAGE_2) {
    return (
      <AddRecipesPage />
    )
} else if (selectedPage === PAGENAME.PAGE_3) {
  return ( 
    <StartersPage />
  )
} else if (selectedPage === PAGENAME.PAGE_4) {
  return (
    <EntreesPage />
  )
} else if (selectedPage === PAGENAME.PAGE_5) {
  return ( 
    <DessertsPage />
  )
  } else if (selectedPage === PAGENAME.PAGE_6) {
    return (
      <SecretRecipesPage />
    )
    }
  } 



  return (
    <div className="App">
      <header className="App-header">

    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          onClick = {onPageClick}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        

      </Header>
      
      <Content
        style={{
          padding: '0 48px',
          backgroundColor: '#FFD700',
        }}
      >
      
       <PageBody /> 
      </Content>
      <Footer
        style={{
          textAlign: 'center', fontFamily: "cursive"
        }}
      >
         <Wave text="Created by Brendan Bellefontaine"/>
      </Footer>
    </Layout>
       
      </header>
    </div>
  );
}

export default App;
