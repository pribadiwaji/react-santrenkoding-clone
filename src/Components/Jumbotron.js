import React from 'react';
import {  Button } from 'reactstrap';
// import Logo from '../Assets/blank.gif'
import '../Assets/Custom-style.css';

const Jumbo = (props) => {
   return (
    <div>
      <div className="jumbotron1 text-center">
      <img style = {{width:100}} src={props.src} alt= ''></img>
        <h1 className="display-3 text-white">{props.title}</h1>
        <p className="lead text-white">{props.subTitle}</p>

        <p className="lead">
          <Button color="primary">{props.buttonText}</Button>
        </p>
      </div>
    </div>
  );
};

export default Jumbo;