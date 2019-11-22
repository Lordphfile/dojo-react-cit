import React from 'react';

const btn = (props) => {
  return <button onClick={ () => console.log(props.id) } >btn {props.id}</button>
}

export default btn;
