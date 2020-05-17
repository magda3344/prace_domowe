import React from 'react';
import Calc from './Calc';

export default class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sum: 0,
        }
    }

    showDod = (newNumber) => { //tak definiujemy fukcję =()=> to ważne żeby tak pisać
        //<Calc prompt={this.state.value}
        let tempVal = this.state.sum + parseInt(newNumber); //parseInt - zamienia wartość tekstową na liczbową, wartość tekstowa jest domyślnie w prompt
        this.setState({ sum: tempVal, newNumber: 0 }) //setState po to aby zachować poprzednią wartość przy kolejnej wpisanej liczbie, aby jedną dodać do drugiej
    }

    render() { //funkcja
        return (
            <div>
                <Calc update={this.showDod} />
                Wynik: {this.state.sum}
            </div>
        );
    }
}


//var value = prompt("Podaj liczbę", "liczba czeka");
/*const Calc=(props)=>{
    return
        {this.props.value};
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

/*export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }
    Calc = (event) => {
        var value = prompt("Podaj liczbę", "liczba czeka");
        var a = parseInt(value)
       this.setState(a)
    }
    showDod = () => { //tak definiujemy fukcję =()=> to ważne żeby tak pisać
        let tempVal = this.state.number + this.state.a; //parseInt - zamienia wartość tekstową na liczbową, wartość tekstowa jest domyślnie w prompt
        this.setState({number: tempVal}) //setState po to aby zachować poprzednią wartość przy kolejnej wpisanej liczbie, aby jedną dodać do drugiej
    }
    render() { //funkcja
        return (
            <div>
                <button onClick={this.showDod}>Wprowadż liczbę</button>
                <p>Wynik: {this.state.number}</p>
            </div>
        );
    }
}
*/

//<Calc value={this.state.value} /> w div w return
// w div return // <Calc prompt={this.state.value} />
//     <Calc okno={wpisz}/>

//https://www.nafrontendzie.pl/podzial-odpowiedzialnosci-komponentow-reactjs
//https://pl.reactjs.org/docs/context.html