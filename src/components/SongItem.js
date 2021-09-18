import React, { Component } from 'react';

//Images
import Logo from '../img/7.jpg';
import AF from '../img/AF.jpeg';
import JaAraEImg from '../img/JaAraE.png';
import AnybodyImg from '../img/Anybody.jpeg';
import AmIAYahooBoyImg from '../img/AmIAYahooBoy.png';
import Ml from '../img/ML.jpeg';
import AshesImg from '../img/Ashes.png';
import GbonaImg from '../img/Gbona.jpeg';
import OnTheLowImg from '../img/on the low.jpeg';

class SongItem extends Component {
    state = {  }
    style = ()  => {
        return {
            backgroundColor: 'black',
            borderBottom: 'solid 2px rgb(8, 8, 8)',
            padding: '10px',
            // position: 'relative'
        }
    }

    iconStyle = () => {
        return {
            float: 'right'
        }
    }

    iconStyle = () => {
        return {
            float: 'right'
        }
    }

    imageStyle = () => {
        return {
            width: '90px',
            height: '80px'
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

    render() { 
        return ( 
            <div style={this.style()} onClick={this.props.songData}>
               <img class="" src={this.imageSource(this.props.song.title)} alt=""  style={this.imageStyle()}/>
               <span class="text-light"> {this.props.song.title}</span>
               <i class="fa fa-ellipsis-v text-light mt-5" style={this.iconStyle()}></i>
               <i class="fa fa-check-circle text-warning mr-3 mt-5" style={this.iconStyle()}></i> 
            </div>
         );
    }
}

export default SongItem;