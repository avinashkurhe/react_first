import React, { Component } from 'react'


class UncontrolEvent extends Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.inputRef.current.value);
        alert('Hello,' + this.inputRef.current.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type='text' defaultValue={'avinash'} ref={this.inputRef}>
                </input>
                <button type='submit'> click</button>
            </form>
        )
    }
}
export default UncontrolEvent;