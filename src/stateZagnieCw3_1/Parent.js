import React from 'react';
//import Calc from './Calc';

/*var value = prompt("Podaj liczbę", "liczba czeka");

const Calc=(props)=>{

    return
        {props.value};
}
*/


export default class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }
    showPrompt = () => { //tak definiujemy fukcję =()=> to ważne żeby tak pisać
        //<Calc prompt={tis.state.value}
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

//     <Calc okno={wpisz}/>

