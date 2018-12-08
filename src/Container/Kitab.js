import React, { Component } from 'react';
import Jumbotron from '../Components/Jumbotron';
class Kitab extends Component {
  render() {
    return (
      <div >
        <Jumbotron 
          src = "../Assets/logo_santrenkoding.jpg"
          title = "Kitab Koding"
          subTitle = "Kegiatan Belajar Intensif 3 tahun Programming dan Qur'an"
          buttonText = "Lihat Kitab Koding"/>
      </div>
    );
  }
}

export default Kitab;
