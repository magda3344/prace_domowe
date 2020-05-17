import React from 'react';

class Calc extends React.Component{
    render() {
        return(
            <div>
                <p>Wynik: {this.props.value}</p>
            </div>
        );
    }
}
export default Calc

//przekazuje zmienną value do Parent - display - w return
//     <Calc okno={wpisz}/>
//<Parent display={value}/>
