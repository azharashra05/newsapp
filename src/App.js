import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=6
  state={
    progress:0,
    apiKey:process.env.RECAT_APP_NEWS_API
  }
  setProgress=(progress)=>
  {
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
              color='#f11946'
              height={3}
              progress={this.state.progress}
           />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize}  />} />
            <Route path="/business"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>} />
            <Route path="/entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
            <Route path="/general"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>} />
            <Route path="/health"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>} />
            <Route path="/science"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/>} />
            <Route path="/sports"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
            <Route path="/technology"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}
