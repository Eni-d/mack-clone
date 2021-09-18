import React, { Component } from 'react';
import SongItem from './SongItem';

class Todos extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.songs.map(song => (
                    <div onClick={() => this.props. songData(song.title, song.src)}>
                    <SongItem key={song.todo_id} song={song} toggleCompleted={this.props.toggleCompleted} deleteTodoItem={this.props.deleteTodoItem}/>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default Todos;