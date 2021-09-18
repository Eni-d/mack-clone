import React, { Component } from 'react';

class AddTodo extends Component {
    state = { 
        todo: ''
     }

    getStyle = () => {
        return {
            display: 'flex',
            height: '40px'
        }
    }

    getBtnStyle = () => {
        return {
            flex: '2',
            backgroundColor: 'lightgreen',
            fontSize: '15px',
            border: 'none'
        }
    }

    getInputStyle = () => {
        return {
            flex: '10'
        }
    }

    onChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.todo)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', "http://localhost:4000/", false );
        xhr.setRequestHeader('Content-Type', 'application/json');
        let data = {
            todo: this.state.todo
        }
        const parameter = JSON.stringify(data)
            xhr.onload = function() {
                if(xhr.status === 200) {
                    console.log('update successful')
                } else {
                    console.log('Error, update could not be made')
                }
            }
            xhr.send(parameter);
        this.setState({
            todo: ''
        })
    }

    render() { 
        return ( 
            <form onSubmit={this.onSubmit} style={this.getStyle()}>
                <input
                    type='text' 
                    placeholder='Your Todo...' 
                    value={this.state.todo}
                    style={this.getInputStyle()}
                    onChange={this.onChange}
                ></input>
                <input
                    type='submit' 
                    value='Submit' 
                    style={this.getBtnStyle()}>
                </input>
            </form>
         );
    }
}
 
export default AddTodo;