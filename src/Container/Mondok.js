import React, { Component } from 'react';
import Jumbotron from '../Components/Jumbotron';
class Mondok extends Component {
  render() {
    return (
      <div >
        <Jumbotron 
          src = "../Assets/logo_santrenkoding.jpg"
          title = "Mondok by Santren Koding"
          subTitle = "Kegiatan Belajar Intensif 3 tahun Programming dan Qur'an"
          buttonText = "Daftar Sekarang!"/>
      </div>
    );
  }
}

export default Mondok;
