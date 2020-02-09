import React from 'react';


export default class Parent extends React.Component {
    render() {
        const author = {name: "Bartosz", surname: "Moszczynski"};
        return (
            <div>
                <NestedInParent display={author}/>
            </div>
        );
    }
}

class NestedInParent extends React.Component {
    render() {
        return (
            <div>
                <p>Imię: {this.props.display.name} , nazwisko: {this.props.display.surname}</p>
                <LowestChild display1={this.props.display}/>
            </div>
        );
    }
}

class LowestChild extends React.Component {
    render() {
        return (
            <div>
                <p>Imię: {this.props.display1.name} , nazwisko: {this.props.display1.surname}</p>
            </div>
        );
    }
}

//to jest zagnieżdzanie