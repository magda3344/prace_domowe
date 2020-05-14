import React from 'react';


export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            id: null,
            errormessagetitle: '',
            errormessageid: '',
            errormessagetext: ''
        };
    }

    myTitle = (event) => {
        const newTitle = event.target.value;
        const updatedState = {title: newTitle, errormessagetitle: ''}; //albo to albo to
        const reg =/^[A-Z][A-Za-z]+$/;

        if (newTitle !=="" && newTitle.length <= 2) {
            updatedState.errormessagetitle = 'Length of title must be higher than 2 characters';
        }
        if (newTitle !=="" && newTitle.length >= 10) {
            updatedState.errormessagetitle = 'Length of title must be lower than 10 characters';
        }
        this.setState(updatedState); //wyswietli nowy tytuł i error jak bedzie
        if (newTitle !=="" && !reg.test(newTitle)) {
            updatedState.errormessagetitle= 'Title must be a text and start with a capital letter';
        }
        this.setState(updatedState);
    }
    myText = (event) => {
        const newText = event.target.value;
        const updatedState = {description: newText, errormessagetext: ''}; //albo to albo to

        if (newText !=="" && newText.length <= 2) {
            updatedState.errormessagetext = 'Length of text must be higher than 2 characters';
        }
        if (newText !=="" && newText.length >= 30) {
            updatedState.errormessagetext = 'Length of text must be lower than 30 characters';
        }
        this.setState(updatedState); //wyswietli nowy tytuł i error jak bedzie
    }
    myId = (event) => {
        const newId = event.target.value;
        const updatedState = {id: newId, errormessageid: ''}; //albo to albo to

        if (newId !=="" && !Number(newId)) {
            updatedState.errormessageid = 'Id must be a number';
        }
        this.setState(updatedState); //wyswietli nowy tytuł i error jak bedzie
    }

    render() {
        return (
            <form>
                <h2> {this.state.id}. {this.state.title.toUpperCase()}, {this.state.description}</h2>
                <p><strong>Enter id article:</strong></p>
                <input
                    type='text'
                    onChange={this.myId}/>
                <p>{this.state.errormessageid}</p>

                <p><strong>Enter your title:</strong></p>
                <input
                    type='text'
                    onChange={this.myTitle}/>
                <p>{this.state.errormessagetitle}</p>

                <p><strong>Enter your text:</strong></p>
                <textarea type='text' onChange={this.myText}/>
                <p>{this.state.errormessagetext}</p>
            </form>
        );
    }
}



