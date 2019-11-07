import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from "../../../store/actions/index";


class AddToDo extends Component {
    state ={
        toDoInput: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        if (!this.state.toDoInput.trim()) return;
        this.props.addToDo(this.state.toDoInput)
    }

    render() {
        return (
            <div>
                <h1>Add ToDo</h1>
                <form onSubmit={this.onSubmit}>
                    <input placeholder={'Enter text'} name={'toDoInput'} value={this.state.toDoInput} onChange={this.handleChange}/>
                    <button type={'submit'}>Submit</button>
                </form>                
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addToDo: (inputVal) => dispatch(actions.addToDo(inputVal))
    };
  };

export default connect(null, mapDispatchToProps)(AddToDo);