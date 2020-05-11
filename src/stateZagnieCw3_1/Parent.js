import React from 'react';
import Calc from './Calc'

export default class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    showPrompt = () => { //tak definiujemy fukcję =()=> to ważne żeby tak pisać
        var value = wpisz; //nazwa zmiennej value, w której chcemy przechowywac wartość
        let tempVal = this.state.number + parseInt(value); //parseInt - zamienia wartość tekstową na liczbową, wartość tekstowa jest domyślnie w prompt
        this.setState({number: tempVal}) //setState po to aby zachować poprzednią wartość przy kolejnej wpisanej liczbie, aby jedną dodać do drugiej
    }

    render() { //funkcja
        var wpisz;
        wpisz= prompt("Wpisz liczbę:", "liczba czeka");
        return (
            <div>
                <Calc okno={wpisz}/>
                <button onClick={this.showPrompt}>Wprowadż liczbę</button>
                <p>Wynik: {this.state.number}</p>
            </div>
        );
    }
}

