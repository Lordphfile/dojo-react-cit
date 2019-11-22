import React from 'react';
import Btn from './btn';
import BtnWithState from './btnWithState';

const Bla = () => {
  const numbers = [1, 2, 3, 4, 5],
  listItems = numbers.map((number) =>
    <li>{number}</li>
  );

  return <div>
      <h1>Hello React</h1>
      <Btn id="1"/>
      <Btn id="2"/>
      <Btn id="3"/>
      <Btn id="4"/>

      <BtnWithState id="5"/>
      <BtnWithState id="6"/>
      <BtnWithState id="7"/>
      <BtnWithState id="8"/>

      <h2>Lista de numeros</h2>
      {listItems}
    </div>;
}

export default Bla;
