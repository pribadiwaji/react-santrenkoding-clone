import React, { Component } from 'react';
import Phone from '../Assets/phone.png';
import Mail from '../Assets/mail.png';
import Pin from '../Assets/pin_pos.png';

class ThirdRow extends Component {
  render() {
    return (
        <div className = "bgLightGrey col">
            <div className="container m-4 text-center">
                <br/>
                <br/>
                <h4>Kontak</h4>
                <div className = "row mt-2">
                    <div className ="col-12">
                        <p><img style = {{width:20}} src={Phone} alt=""/> 082225111587<br/>
                        <img style = {{width:15}} src={Mail} alt=""/> santrenkoding@gmail.com</p>
                        <p><img  src={Pin} alt=""/> Titik Ruang Space,<br/>
                        Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik,<br/>
                        Kota Semarang, Jawa Tengah 50269
                        </p>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ThirdRow;
