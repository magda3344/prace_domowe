import React from 'react';
import LowestChild from "./LowestChild";

export default class NestedInParent extends React.Component {
    render() {
        return (
            <div>
                <p>Imię: {this.props.display.name} , nazwisko: {this.props.display.surname}</p>
                <LowestChild display1={this.props.display}/>
            </div>
        );
    }
}
//tu już nie mogę użyć nazwy author, to nazwa tylko dla Parent, nie widzi jej tutaj
//wyświetlanie to {this.props.display} - i tu juz musimy użyć tej nazwy - nie author
