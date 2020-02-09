import React from 'react';

export default class Calc extends React.Component {

    constructor(props) {
        super(props);
        this.state = { //inicjalizacja state, stanu, definiujemy stan w konstruktorze
            number: 0
        }
    }

    showPrompt = () => { //tak definiujemy fukcję =()=> to ważne żeby tak pisać
        var value = prompt("Podaj liczbę"); //nazwa zmiennej value, w której chcemy przechowywac wartość
        let tempVal = this.state.number + parseInt(value); //parseInt - zamienia wartość tekstową na liczbową, wartość tekstowa jest domyślnie w prompt
        this.setState({number: tempVal}) //setState po to aby zachować poprzednią wartość przy kolejnej wpisanej liczbie, aby jedną dodać do drugiej
    }

    render() { //funkcja

        return (
            <div>
                <button onClick={this.showPrompt}>Wprowadż liczbę</button>
                <p>Wynik: {this.state.number}</p>
            </div>
        );
    }
}

//po wyświetleniu raz znika prompt - tracimy stan po przełądowaniu strony, po uzyskaniu wyniku
//poptrzebujuemy wyświetlać prompt wiele razy
//set.state - zmiana stanu- zmusza przeładowanie strony, zachowanie komponentu
//{this.state.number} - to odniesienie do pliku html-, do wyświetlenia, jak to umieszczamy w {}
//po kliknięciu button -onclick, wywołujemy funkcję showPrompt
