import { findAllByDisplayValue } from '@testing-library/react';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {
    state = { 
        activeFav: false,
        activeOff: false,
        activePlay: false,
     }

    style = ()  => {
        return {
            backgroundColor: 'rgb(8, 8, 8)',
        }
    }

    style1 = ()  => {
        return {
            backgroundColor: 'black',
        }
    }

    // navStyle = () => {
    //     return {
    //         textDecoration: 'underline'
    //     }
    // }

    badge = () => {
        return {
            width: '60px',
            border: 'none'
        }
    }

    underscoreOff = (data) => {
        if(data === false) {
            return {
                height: '0px',
            }
        } else {
            return {
                height: '2px',
                backgroundColor: 'orange',
            }
        }
    }

    underscoreFav = (data) => {
        if(data === false) {
            return {
                height: '0px',
            }
        } else {
            return {
                height: '2px',
                backgroundColor: 'orange',
            }
        }
    }

    underscorePlay = (data) => {
        if(data === false) {
            return {
                height: '0px',
            }
        } else {
            return {
                height: '2px',
                backgroundColor: 'orange',
            }
        }
    }

    toggleActive = (data) => {
        if(data === 'Fav'){
            this.setState({
                activeFav: !this.state.activeFav,
                activeOff: false,
                activePlay: false
            })
        }
        if(data === 'Off'){
            this.setState({
                activeFav: false,
                activeOff: !this.state.activeOff,
                activePlay: false
            })
        }
        if(data === 'Play'){
            this.setState({
                activeFav: false,
                activeOff: false,
                activePlay: !this.state.activePlay
            })
        }
    }

    render() { 
        return ( 
            <div class="fixed-top">
                <nav style={this.style()} class="py-3">
                    <div class="row text-center text-light ">
                        <div class="col-4">
                            <p class="fa fa-cog"></p>
                        </div>
                        <div class="col-4">
                            <strong>AUDIOMACK</strong>
                        </div>
                        <div class="col-4">
                            <p class="fa fa-bell"></p>
                        </div>
                    </div>
                </nav>
                <nav style={this.style1()} class="">
                    <div class="row text-center text-light">
                        <div class="col-3">
                            <p class="fa fa-search"></p>
                        </div>
                        <div class="col-3" onClick={() => this.toggleActive('Fav')}>
                            <strong class="text-muted">Favourites</strong>
                            <p style={this.underscoreFav(this.state.activeFav)}></p>
                        </div>
                        <div class="col-3" onClick={() => this.toggleActive('Off')}>
                            <strong class="text-warning">Offline</strong>
                            <p style={this.underscoreOff(this.state.activeOff)}></p>
                        </div>
                        <div class="col-3" onClick={() => this.toggleActive('Play')}>
                            <strong class="text-muted">Playlists</strong>
                            <p style={this.underscorePlay(this.state.activePlay)}></p>
                        </div>
                    </div>
                    <div class="row text-center text-light">
                        <div class="col-12">
                            <select class="badge bg-dark mr-5 mb-2 text-light text-center custom-select" style={this.badge()}>
                                <option selected>All</option>
                                <option>A-Z</option>
                                <option>Z-A</option>
                            </select>
                            <select class="badge bg-dark text-light text-center custom-select" style={this.badge()}>
                                <option selected>Newest</option>
                            </select>
                        </div>
                    </div>
                </nav>
                <h6 class="bg-warning text-light text-center py-2"><strong>UPGRADE TO AUDIOMACK PREMIUM TO REMOVE ADS</strong></h6>
            </div>
         );
    }
}
 
export default Header;