import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            username1: '',
            age: null,
            sex: '',
            errormessagename: '',
            errormessagename1: '',
            errormessagesurname: '',
            errormessageage: ''
        };
    }

    ConvertTextToUpperCase=(event)=>{
        var A = this.state.TextHolder ;
        var B = A.toUpperCase() ;
        this.setState({ TextHolder : B })
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        var errAge = '';
        var errName = '';
        const reg = /^[A-z]/;


        if (nam === "age") {
            if (val !== "" && !Number(val)) {
                errAge = <strong>Your age must be a number</strong>;
            }
            this.setState({errormessageage: errAge});
        }

        if (nam === "username") {
            if (val.length <= 4) {
                errName = <strong>Length of name must be higher than 4 characters</strong>;
            }
            this.setState({errormessagename: errName});
            if (Number(val)) {
                errName = <strong>Name must be a text</strong>;
            }
            this.setState({errormessagename: errName});
            if (val !== reg) {
                errName = <strong>Name must start with a capital letter</strong>;
                }
                this.setState({errormessagename: errName});
            }


            if (nam === "username1") {
                if (val.length <= 4) {
                    errName = <strong>Length of surname must be higher than 4 characters</strong>;
                }
                this.setState({errormessagesurname: errName});
                if (Number(val)) {
                    errName = <strong>Surname must be a text</strong>;
                }
                this.setState({errormessagesurname: errName});
            }
            this.setState({[nam]: val}); //zmiana komponentu z nam na val- setState

    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.username1} {this.state.age} {this.state.sex}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>{this.state.errormessagename}</p>

                <p>Enter your surname:</p>
                <input
                    type='text'
                    name='username1'
                    onChange={this.myChangeHandler}
                />
                <p>{this.state.errormessagesurname}</p>

                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                <p>{this.state.errormessageage}</p>

                <p>Choose your sex:</p>

                <select  name='sex' onChange={this.myChangeHandler}>
                    <option selected value="kobieta">Kobieta</option>
                    <option value="mezczyzna">Mezczyzna</option>
                </select>
            </form>
        );
    }
};