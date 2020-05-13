import React from 'react';
import Calc from './Calc';

/*var value = prompt("Podaj liczbę", "liczba czeka");

const Calc=(props)=>{

    return
        {props.value};
}
*/
/*class Calc extends React.Component {
    showPrompt =()=> {
        value = prompt("Podaj liczbę", "liczba czeka");

    }
    render() {
        return (
            <div></div>
        );
    }
}
 */
/*class Calc extends React.Component{
value = prompt("Podaj liczbę", "liczba czeka");
    render() {
        return
        {this.props.value}
    }
};

 */

export default class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }

    showDod = () => { //tak definiujemy fukcję =()=> to ważne żeby tak pisać
        //<Calc prompt={this.state.value}
        let tempVal = this.state.number + parseInt(value); //parseInt - zamienia wartość tekstową na liczbową, wartość tekstowa jest domyślnie w prompt
        this.setState({number: tempVal}) //setState po to aby zachować poprzednią wartość przy kolejnej wpisanej liczbie, aby jedną dodać do drugiej
    }

    render() { //funkcja
        return (
            <div>
                <Calc value={this.state.value} />
                <button onClick={this.showDod}>Wprowadż liczbę</button>
                <p>Wynik: {this.state.number}</p>
            </div>
        );
    }
}
// w div return // <Calc prompt={this.state.value} />
//     <Calc okno={wpisz}/>

//https://www.nafrontendzie.pl/podzial-odpowiedzialnosci-komponentow-reactjs
//https://pl.reactjs.org/docs/context.html