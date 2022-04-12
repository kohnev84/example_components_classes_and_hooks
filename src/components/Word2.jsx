import React, { Component } from 'react';
import { Button } from 'antd';

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
                <h1>Работа со стейтом (классовый компонент)</h1>

                <h2>{this.state.valueDate}</h2>
                <Button onClick={this.word}>выберите дату</Button>
                <h2>{this.state.moscowDate}</h2>
                <Button onClick={this.city}>выбери Москву</Button>
                <h3>{this.state.numberoneDate}</h3>
            </div>

        );
    }
}

export default Word2;