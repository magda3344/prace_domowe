import React from 'react';


export default class LowestChild extends React.Component {
    render() {
        return (
            <div>
<p>Imię: {this.props.display2.name} , nazwisko: {this.props.display2.surname}</p>
            </div>
        );
    }
}

//mamy tak Parent - rodzic, potem dziecko - NestedInParent, potem wnuczek-LowestChild, prawnuczek - LowestLowestChild
//dane są tylko w Parent, nazywają sie author
// w dziecku nie możemy uzyć nazwy author dla danych któe chcemy wziąć od rodzica, musimy nadać nową nazwę
//we wnuczku to samo nowa nazwa dla danych od dziecka (pierwotnie od rodzica)
//w kolejnych zagnieżdżonych komponentach kolejne nowe nazwy
//jeden komponent zagnieżdżamy w drugim