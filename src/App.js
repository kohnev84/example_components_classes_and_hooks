import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Word2 from './components/Word2';

function App() {
  const [valueDate, setWord] = useState("hello");
  const [moscowDate, setCity] = useState("выбери Москву");
  const [numberoneDate, setNumber] = useState("Пример логики после отрисовки страницы");
  useEffect(() => {
    // Обновляем название докуммента, используя API браузера
    setNumber("логика работает")
  });
  function word() {
    setWord("goodbye")
  }
  function city() {
    setCity("Moscow")
  }
  return (
    <div className="App">
      <h1>Работа со стейтом (функциональный компонент)</h1>

      <h2>{valueDate}</h2>
      <button onClick={word}>выберите дату</button>

      <h2>{moscowDate}</h2>
      <button onClick={city}>Выбери Москву</button>
      <h3>{numberoneDate}</h3>
      <Word2 />
    </div>
  );
}

export default App;
