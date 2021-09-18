import React, { Component } from 'react';

//Style
import './Player.css'

//Images
import AF from '../img/AF.jpeg';
import JaAraEImg from '../img/JaAraE.png';
import AnybodyImg from '../img/Anybody.jpeg';
import AmIAYahooBoyImg from '../img/AmIAYahooBoy.png';
import Ml from '../img/ML.jpeg';
import AshesImg from '../img/Ashes.png';
import GbonaImg from '../img/Gbona.jpeg';
import OnTheLowImg from '../img/on the low.jpeg';

//Music source
import WetinManGoDo from '../songs/Burna-Boy-Wetin-Man-Go-Do-(JustNaija.com).mp3';
import Anybody from '../songs/Burna_Boy_Anybody_9jaflaver.com_.mp3';
import AmIAYahooBoy from '../songs/Naira_Marley_-_Am_I_A_Yahoo_Boy_Ft_Zlatan.mp3';
import JaAraE from '../songs/08 JA ARA E.mp3';
import Ginger from '../songs/Ginger.mp3';
import Ashes from '../songs/Madi diaz - ashes.mp3';
import CollateralDamage from '../songs/Burna-Boy-Collateral-Damage-(JustNaija.com).mp3';
import OnTheLow from '../songs/Burna_Boy_On_The_Low_9jaflaver.com_.mp3';
import Gbona from '../songs/Burna-Boy-Gbona.mp3';

class Player extends Component {
    state = {
        songState: 'Pause',
        songs: [AmIAYahooBoy, JaAraE, Ginger, Ashes, CollateralDamage, OnTheLow, Anybody, WetinManGoDo, Gbona]
    }

    style = (data)  => {
        if(data.clicked === false){
            return {
                transition: '0.5s',
                backgroundColor: 'black',
                borderTop: 'solid 2px orange',
                paddingTop: '10px',
                height: '90px',
            }
        } else {
            return {
                display: 'flex',
                flexDirection: 'column',
                transition: '0.5s',
                backgroundColor: 'black',
                borderTop: 'solid 2px orange',
                paddingTop: '10px',
                height: '630px',
                alignItems: 'center'
            }
        }
    }

    iconStyle = (data) => {
        if(data.clicked === false) {
            return {
                float: 'right'
            }
        } else {
            return {
                display: 'none',
            }
        }
    }

    downIconStyle = (data) => {
        if(data.clicked === false){
            return {
                display: 'none'
            }
        } else {
            return {
               float: 'right'
            }
        }
    }

    navStyle = () => {
        return{
            float: 'right',
            boxSizing: 'border-box'
        }
    }

    imageStyle = (data) => {
        if(data.clicked === false){
            return {
                width: '40px',
                height: '40px',
            }
        } else {
            return {
                width: '250px',
                height: '250px',
                marginTop: '20px',
                border: '2px solid orange',
                borderRadius: '50%'
            }
        }
    }

    songTitleStyle = (data) => {
        if(data.clicked === false){
            return {
                //Nothing
            }
        } else {
            return {
                marginBottom: '20px'
            }
        }
    }

    playStyle = () => {
        if(this.state.songState === 'Pause'){
            return {
                //Nothing
            }
        } else {
            return {
                display: 'none'
            }
        }
    }

    pauseStyle = () => {
        if(this.state.songState === 'Play'){
            return {
                //Nothing
            }
        } else {
            return {
                display: 'none'
            }
        }
    }

    getTitle = () => {
        this.setState({
            songState: 'Play',
            songs: [...this.state.songs],
            title: this.props.title
        })
    }

    progressBar = () => {
        return {
            width: '80%',
            height: '5px',
            backgroundColor: '#333'
        }
    }

    ball = () => {
        return {
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            position: 'relative',
            bottom: '10px',
            backgroundColor: 'orange'
        }
    }

    seek = () => {
        return {
            width: '0px',
            height: '5px',
            backgroundColor: 'orange'
        }
    }

    playOrPause = () => {
        if(this.state.songState === 'Pause'){
            this.setState({
                songState: 'Play',
                songs: [...this.state.songs]
            })
        } else {
            this.setState({
                songState: 'Pause',
                songs: [...this.state.songs]
            })
        }
    }

    source = (src) => {
        switch (src) {
            case 'Am I A Yahoo Boy':
                return AmIAYahooBoy
            case 'Ja Ara E':
                return JaAraE
            case 'Ginger':
                return Ginger
            case 'Ashes':
                return Ashes
            case 'Collateral Damage':
                return CollateralDamage
            case 'On The Low':
                return OnTheLow
            case 'Anybody':
                return Anybody
            case 'Wetin Man Go Do':
                return WetinManGoDo
            case 'Gbona':
                return Gbona
            default:
                break;
        }

    }

    imageSource = (src) => {
        switch (src) {
            case 'Am I A Yahoo Boy':
                return AmIAYahooBoyImg
            case 'Ja Ara E':
                return JaAraEImg
            case 'Ginger':
                return Ml
            case 'Ashes':
                return AshesImg
            case 'Collateral Damage':
                return AF
            case 'On The Low':
                return OnTheLowImg
            case 'Anybody':
                return AnybodyImg
            case 'Wetin Man Go Do':
                return AF
            case 'Gbona':
                return GbonaImg
            default:
                break;
        }
    }

    fastForward = () => {
        let position
        let count
        let audio = document.getElementById('audio')
        let image = document.getElementById('image')
        let title = document.getElementById('title')

        switch (this.props.title) {
            case 'Am I A Yahoo Boy':
                count = this.state.songs.length
                position = this.state.songs.indexOf(AmIAYahooBoy)
                audio.src = this.state.songs[++position]
                image.src = JaAraEImg
                title.textContent = 'Ja Ara E'
                audio.play()
                break;
            case 'Ja Ara E':
                position = this.state.songs.indexOf(JaAraE)
                audio.src = this.state.songs[++position]
                image.src = Ml
                title.textContent = 'Ginger'
                audio.play()
                break;
            case 'Ginger':
                position = this.state.songs.indexOf(Ginger)
                audio.src = this.state.songs[++position]
                image.src = AshesImg
                title.textContent = 'Ashes'
                audio.play()
                break;
            case 'Ashes':
                position = this.state.songs.indexOf(Ashes)
                audio.src = this.state.songs[++position]
                image.src = AF
                title.textContent = 'Collateral Damage'
                audio.play()
                break;
            case 'Collateral Damage':
                position = this.state.songs.indexOf(CollateralDamage)
                audio.src = this.state.songs[++position]
                image.src = OnTheLowImg
                title.textContent = 'On The Low'
                audio.play()
                break;
            case 'On The Low':
                position = this.state.songs.indexOf(OnTheLow)
                audio.src = this.state.songs[++position]
                image.src = AnybodyImg
                title.textContent = 'Anybody'
                audio.play()
                break;
            case 'Anybody':
                position = this.state.songs.indexOf(Anybody)
                audio.src = this.state.songs[++position]
                image.src = AF
                title.textContent = 'Wetin Man Go Do'
                audio.play()
                break;
            case 'Wetin Man Go Do':
                position = this.state.songs.indexOf(WetinManGoDo)
                audio.src = this.state.songs[++position]
                image.src = GbonaImg
                title.textContent = 'Gbona'
                audio.play()
                break;
            case 'Gbona':
                position = this.state.songs.indexOf(Gbona)
                break;
            default:
                break;
        }
    }

    backForward = () => {
        let position
        let audio = document.getElementById('audio')
        let image = document.getElementById('image')
        let title = document.getElementById('title')

        switch (this.props.title) {
            case 'Am I A Yahoo Boy':
                position = this.state.songs.indexOf(AmIAYahooBoy)
                break;
            case 'Ja Ara E':
                position = this.state.songs.indexOf(JaAraE)
                audio.src = this.state.songs[--position]
                image.src = AmIAYahooBoyImg
                title.textContent = 'Am I A Yahoo Boy'
                audio.play()
                break;
            case 'Ginger':
                position = this.state.songs.indexOf(Ginger)
                audio.src = this.state.songs[--position]
                image.src = JaAraEImg
                title.textContent = 'Ja Ara E'
                audio.play()
                break;
            case 'Ashes':
                position = this.state.songs.indexOf(Ashes)
                audio.src = this.state.songs[--position]
                image.src = Ml
                title.textContent = 'Ginger'
                audio.play()
                break;
            case 'Collateral Damage':
                position = this.state.songs.indexOf(CollateralDamage)
                audio.src = this.state.songs[--position]
                image.src = AshesImg
                title.textContent = 'Ashes'
                audio.play()
                break;
            case 'On The Low':
                position = this.state.songs.indexOf(OnTheLow)
                audio.src = this.state.songs[--position]
                image.src = AF
                title.textContent = 'Collateral Damage'
                audio.play()
                break;
            case 'Anybody':
                position = this.state.songs.indexOf(Anybody)
                audio.src = this.state.songs[--position]
                image.src = OnTheLowImg
                title.textContent = 'On The Low'
                audio.play()
                break;
            case 'Wetin Man Go Do':
                position = this.state.songs.indexOf(WetinManGoDo)
                audio.src = this.state.songs[--position]
                image.src = AnybodyImg
                title.textContent = 'Anybody'
                audio.play()
                break;
            case 'Gbona':
                position = this.state.songs.indexOf(Gbona)
                audio.src = this.state.songs[--position]
                image.src = AF
                title.textContent = 'Wetin Man Go Do'
                audio.play()
                break;
            default:
                break;
        }
    }

    componentDidUpdate(){
        let audio = document.getElementById('audio')
        let bar = document.getElementById('progressBar')
        let ball = document.getElementById('ball')
        let seek = document.getElementById('seek')

        if(this.state.songState === 'Play'){
            audio.play()
            let update = () => {
                let width = (audio.currentTime/audio.duration) * 100 
                seek.style.width = `${width}%`
                ball.style.left = `${width}%`
             }
    
            audio.addEventListener('timeupdate', update)
        } else {
            audio.pause()
        }

        let seekTime = (event) => {
            let clickedPosition = event.clientX - event.target.offsetLeft
            audio.currentTime = (clickedPosition / event.target.offsetWidth) * audio.duration
        }
        bar.addEventListener('mousedown', seekTime)
    }

  render() {
    return (
      <div class="">
          <nav class="fixed-bottom py-4">
            <div style={this.style(this.props.songData[0])}>
                <i class="fa fa-arrow-down text-light mr-3 mt-3" style={this.downIconStyle(this.props.songData[0])} onClick={this.props.setSongData}></i>
                <img class="ml-2 mr-2" id="image" src={this.imageSource(this.props.title)} alt="" style={this.imageStyle(this.props.songData[0])} />
                <span class="text-light" style={this.songTitleStyle(this.props.songData[0])} onClick={this.props.setSongData} id="title">{this.props.title}</span>
                <div style={this.iconStyle(this.props.songData[0])}>
                    {/* <i class="fa fa-play-circle text-light mr-3 mt-3"></i>
                    <i class="fa fa-ellipsis-v text-light mt-3 mr-3"></i> */}
                     <p class="fa fa-play-circle fa-2x mr-5 text-light" onClick={() => this.playOrPause()} style={this.playStyle()}></p>
                     <p class="fa fa-pause-circle fa-2x mr-5 text-light" onClick={() => this.playOrPause()} style={this.pauseStyle()}></p>
                </div> 
                <div class="container text-center">
                    <div class="row ">
                        <div class="col-2 mr-3">
                            <p class="fa fa-heart text-muted"></p>
                            <p class="text-muted">Favourite</p>
                        </div>
                        <div class="col-2 mr-3">
                            <p class="fa fa-plus text-muted"></p>
                            <p class="text-muted">Playist</p>
                        </div>
                        <div class="col-2 mr-3">
                            <p class="fa fa-retweet text-muted"></p>
                            <p class="text-muted">Reup</p>
                        </div>
                        <div class="col-2 mr-3">
                            <p class="fa fa-download text-warning"></p>
                            <p class="text-muted">Download</p>
                        </div>
                        <div class="col-2 mr-2">
                            <p class="fa fa-paper-plane text-muted"></p>
                            <p class="text-muted">Share</p>
                        </div>
                    </div>
                </div> 
                <div style={this.progressBar()} class="mb-3" id="progressBar">
                    <div style={this.seek()} id="seek"></div>
                    <div style={this.ball()} id="ball"></div>
                </div>
                <div class="container text-light mt-2 text-center">
                    <div class="row">
                        <div class="col-3">
                            <p class="badge bg-dark">HIFI</p>
                        </div>
                        <div class="col-2">
                            <p class="fa fa-fast-backward fa-2x" onClick={() => this.backForward()}></p>
                        </div>
                        <div class="col-2">
                            <p class="fa fa-play-circle fa-2x" onClick={() => this.playOrPause()} style={this.playStyle()}></p>
                            <p class="fa fa-pause-circle fa-2x" onClick={() => this.playOrPause()} style={this.pauseStyle()}></p>
                        </div>
                        <div class="col-2">
                            <p class="fa fa-fast-forward fa-2x" onClick={() => this.fastForward()}></p>
                        </div>
                        <div class="col-2 text-muted">
                            <p class="fa fa-rss-square fa-2x"></p>
                        </div>
                    </div>
                    <div class="container text-center mt-2">
                        <div class="row">
                            <div class="col-4 text-muted">
                                <p class="fa fa-random"></p>
                            </div>
                            <div class="col-4 text-muted">
                                <p class="fa fa-equiliser"></p>
                            </div>
                            <div class="col-4 text-muted">
                                <p class="fa fa-redo"></p>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <audio id="audio" src={this.source(this.props.title)}></audio>
                    </div>
                </div>
            </div>
          </nav>
      </div>
    );
  }
}

export default Player;

