import { Fragment, useState } from 'react'

// import './App.css'
import InstaSideBar from './components/Sidebar/InstaSideBar'
import HeaderStories from './components/Header/HeaderStories'
import InstaFeeds from './components/FeedsSection/InstaFeeds'

function App() {

  return (
    <Fragment>
      <InstaSideBar />
      <HeaderStories />
      <InstaFeeds />
    </Fragment>
  )
}

export default App
