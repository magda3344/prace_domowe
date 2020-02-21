import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            id: null,
        };
    }
    myTitle = (event) => {
        this.setState({title: event.target.value});
    }
    myText = (event) => {
        this.setState({description: event.target.value});
    }
    myId = (event) => {
        this.setState({id: event.target.value});
    }

    render() {
        return (
            <form>
               <h2> {this.state.id}. {this.state.title.toUpperCase()}</h2>
                <p>Enter id article:</p>
                <input
                    type='text'
                    onChange={this.myId}/>

                <p>Enter your title:</p>
                <input
                    type='text'
                    onChange={this.myTitle}/>
                <p>Enter your text:</p>
                <textarea  type='text' onChange={this.myText} />
            </form>
        );
    }
}


