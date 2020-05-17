import React from 'react';
import Calc from './Calc1';

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
        let value = prompt("Podaj liczbę", "liczba czeka");
        let tempVal = this.state.number + parseInt(value); //parseInt - zamienia wartość tekstową na liczbową, wartość tekstowa jest domyślnie w prompt
        this.setState({ number: tempVal }) //setState po to aby zachować poprzednią wartość przy kolejnej wpisanej liczbie, aby jedną dodać do drugiej
    }

    render() { //funkcja
        return (
            <div>
                <button onClick={this.showDod}>Wprowadż liczbę</button>
                <Calc value={this.state.number} />
            </div>
        );
    }
}
// w div return // <Calc prompt={this.state.value} />
//     <Calc okno={wpisz}/>

//https://www.nafrontendzie.pl/podzial-odpowiedzialnosci-komponentow-reactjs
//https://pl.reactjs.org/docs/context.html

/*Startujemy od klasy Parent. Pełni ona rolę kontenera, który generuje i przechowuje dane (w naszym przykładzie liczbę).
Gdy wciśniemy przycisk, wywoływana jest metoda showDod, która:
Wyświetla prompt
Pobiera od użytkownika liczbę
Dodaje ją do aktualnego stanu
Zmiana stanu powoduje renderowanie komponentu Parent
W trakcie renderowania tworzony jest komponent Calc (pełniący rolę prezentacyjną).
Aktualny stan przekazywany jest do Calc poprzez właściwość (property) value
W trakcie renderowania komponentu Calc przekazana wartość jest prezentowana
Pozdrawiam, Lech*/