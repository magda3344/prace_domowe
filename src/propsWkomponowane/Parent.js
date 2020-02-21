import React from 'react';
import NestedInParent from "./NestedInParent"; //zawsze zaczynamy od ./


/*export default class Parent extends React.Component { //export default po to aby widziec na zewnątrz//
    render() {    to jest pusty komponent
        return (
            <div>

            </div>
        );
    }
} */

export default class Parent extends React.Component {
    render() {
        const author = {name: "Bartosz", surname: "Moszczynski"}; //deklaracja, tu może być zaciagane skądś np. baza danych
        return (
            <div>
                <NestedInParent display={author}/>
            </div>
        );
    }
}
//display to nazwa props, to wiadomo że to jest props, tak sie go pisze, props sie wywołuje w tym miejscu, w render
//author on sie nazywa w tym pliku w tym rodzicu
//state było construktor, super(), this.state=