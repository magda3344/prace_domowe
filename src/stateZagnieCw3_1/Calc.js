import React from 'react';


class Calc extends React.Component{
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

//przekazuje zmienną value do Parent - display - w return



//     <Calc okno={wpisz}/>
//<Parent display={value}/>

