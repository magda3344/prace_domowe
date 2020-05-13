import React from "react";

export default class LifecycleTest extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            counter: 0
            }

        };

    changeCounter=(counter)=>{
        this.setState({counter: this.state.counter +1});
    }
    shouldComponentUpdate() {
        return this.state.counter <= 9;
    }

    render(){
        return(
            <div>
                <button
                    type="button"
                    onClick={this.changeCounter}>
                  Kliknij</button>
                <p> Kliknięto {this.state.counter} razy.</p>
            </div>
        );
    }
}

//https://www.nafrontendzie.pl/cykl-zycia-komponentu-react
//https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1