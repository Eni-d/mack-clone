import React, { Component } from 'react';
import './App.css';
import './fontawesome/css/all.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

//Components
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import SongItem from './components/SongItem';
import Player from './components/Player'
import Footer from './components/Footer'
import About from './components/About';

class App extends Component {
  state = {
    songs: [
      {
        todo_id: Math.random(),
        title: 'Am I A Yahoo Boy',
        src: 'Am_I_A_Yahoo_Boy',
        by: 'Nairamarley',
        album: ''
      },
      {
        todo_id: Math.random(),
        title: 'Ja Ara E',
        src: 'Ja_Ara_E',
        by: 'Burna boy',
        album: 'Lion King'
      },
      {
        todo_id: Math.random(),
        title: 'Ginger',
        src: 'Ginger',
        by: 'Wizkid',
        album: 'Made In Lagos'
      },
      {
        todo_id: Math.random(),
        title: 'Ashes',
        src: 'Ashes',
        by: 'Madi Diaz',
        album: ''
      },
      {
        todo_id: Math.random(),
        title: 'Collateral Damage',
        src: 'Collateral_Damage',
        by: 'Burna Boy',
        album: 'African Giant'
      },
      {
        todo_id: Math.random(),
        title: 'On The Low',
        src: 'On_The_Low',
        by: 'Burna Boy',
        album: 'African Giant'
      },
      {
        todo_id: Math.random(),
        title: 'Anybody',
        src: 'Anybody',
        by: 'Burna Boy',
        album: 'African Giant'
      },
      {
        todo_id: Math.random(),
        title: 'Wetin Man Go Do',
        src: 'Wetin_Man_Go_Do',
        by: 'Burna Boy',
        album: 'African Giant'
      },
      {
        todo_id: Math.random(),
        title: 'Gbona' ,
        src: 'Gbona',
        by: 'Burna Boy',
        album: 'African Giant'
      },
    ],
    songData: [
      {
        clicked: false,
        title: '',
        src: ''
      }
    ]
   }

   style = () =>  {
     return {
       background: '#000'
     }
   }

   songData = (title, src) => {
    this.setState({
      songData: [
        {
          title,
          click: this.state.songData[0].clicked,
          src
        }
      ]
    })
   }

   headerSpace = () => {
     return {
       height: '200px'
     }
   }

   footerSpace = () => {
     return {
       height: '120px'
     }
   }

   setSongData = () => {
     let todos = this.state.todos
     let clicked = !this.state.songData[0].clicked
     this.setState({
       todos: todos,
       songData: [
         {
           clicked,
           title: this.state.songData[0].title,
           src: this.state.songData[0].src
         }
       ]
     })
     console.log(this.state.songData)
   }

  render() { 
    return (
      <div style={this.style()}>
        <div style={this.headerSpace()}></div>
        <Header />
        <Todos songs={this.state.songs} songData={this.songData}/>
        <Player songData={this.state.songData} setSongData={this.setSongData} title={this.state.songData[0].title} songs={this.state.songs} src={this.state.songData[0].src}/>
        <div style={this.footerSpace()}></div>
        <Footer />
      </div>
    );
  }


}
 
export default App;