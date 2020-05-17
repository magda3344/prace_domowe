import React from 'react';

class Calc extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    let value = prompt("Podaj liczbę", "liczba czeka");
                    this.props.update(value);
                }}>Wprowadż liczbę</button>
            </div>
        );
    }
}
export default Calc

/*class Calc extends React.Component{
    value = prompt("Podaj liczbę", "liczba czeka");
    render() {
        return(
        <div>
            {this.props.value}
        </div>
        );
    }
};
export default Calc
*/
//przekazuje zmienną value do Parent - display - w return
//     <Calc okno={wpisz}/>
//<Parent display={value}/>

