import React, { Component } from 'react';
import Logo from '../Assets/logo.png';
import Pointer from "../Assets/circle_white.png";
import '../Assets/Custom-style.css'

class SecondRow extends Component {
  render() {
    return (
        <div className="container mt-4">
            <div className = "row text-center">
                <div className = 'col-6 blockBg'>
                    <h4 className="mt-4 text-white">Kegiatan</h4>
                    <div className="text-center mt-4 text-white">
                        <p><img src={Pointer} alt=""/> Koding</p>
                        <p><img src={Pointer} alt=""/> Belajar Agama dan Alquran</p>
                        <p><img src={Pointer} alt=""/> Pendidikan Karakter</p>
                        <p><br/></p>
                    </div>
                </div>
                <div className = 'col-6'>
                    <img style = {{width:46}} src={Logo} alt='santren koding'></img>
                    <h4 className="mt-4">"Memberi Manfaat Untuk Ummat"</h4>
                    <div className="text-center mt-4">
                        <p>-Santren Koding-</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default SecondRow;
