import React from 'react';
import LowestLowestChild from "./LowestLowestChild";


export default class LowestChild extends React.Component {
    render() {
        return (
            <div>
                <p>Imię: {this.props.display1.name} , nazwisko: {this.props.display1.surname}</p>
                <LowestLowestChild display2={this.props.display1}/>
            </div>
        );
    }
}