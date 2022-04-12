import React, { Component } from 'react';

class Word2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueDate: "hello",
            moscowDate: "Выбери Москву",
            numberoneDate: "Пример логики после отрисовки страницы"
        };
    }
    word = () => {
        this.setState({
            valueDate: "goodbye"
        })
    }

    city = () => {
        this.setState({
            moscowDate: "Moscow"
        })
    }
    componentDidMount() {
        this.setState({
            numberoneDate: "логика работает"
        })
    }
    render() {

        return (
            <div style={{ backgroundColor: "red" }}>
                <h1>работа со стейтом(Классовый компонент)</h1>

                <h2>{this.state.valueDate}</h2>
                <button onClick={this.word}>выберите дату</button>
                <h2>{this.state.moscowDate}</h2>
                <button onClick={this.city}>выбери Москву</button>
                <h3>{this.state.numberoneDate}</h3>
            </div>

        );
    }
}

export default Word2;