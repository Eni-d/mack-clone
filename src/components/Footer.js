import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    style = ()  => {
        return {
            backgroundColor: 'rgb(8, 8, 8)',
            height: '58px'
            // padding: '0',
            // margin: '0',
            // borderTop: 'solid 2px orange',
            // position: 'relative'
        }
    }
  render() {
    return (
      <div class="fixed-bottom text-center" style={this.style()}>
          <div class="container">
            <div class="row ">
                <div class="col-2 mr-3">
                    <p class="fa fa-fire text-light"></p>
                    <p class="text-muted">Feed</p>
                </div>
                <div class="col-2 mr-3">
                    <p class="fa fa-music text-light"></p>
                    <p class="text-muted">Playist</p>
                </div>
                <div class="col-2 mr-3">
                    <p class="fa fa-fire-alt text-light"></p>
                    <p class="text-muted">Browse</p>
                </div>
                <div class="col-2 mr-3">
                    <p class="fa fa-search text-light"></p>
                    <p class="text-muted">Search</p>
                </div>
                <div class="col-2 mr-2">
                    <p class="fa fa-book text-light"></p>
                    <p class="text-muted">Library</p>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Footer;
