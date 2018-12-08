import React, { Component } from 'react';
import {Button} from 'reactstrap'
import Card from './Card';

class FirstRow extends Component {
  render() {
    return (
        <div>
            <div className="text-center m-4">
                <h2>Daftar Kajian Koding Rutin</h2>
            </div>
            <div className = "container text-center">
                <div className = "row m-4">
                    <div className ="col-4">
                    <Card 
                        img="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg"
                        title = "Kajian Koding #3"
                        text = "ReactJS dan Firebase Auth/Hosting"
                        />
                    </div>
                    <div className ="col-4">
                    <Card 
                        img="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381"
                        title = "Kajian Koding #2"
                        text = "html, css, boostrap dasar"/>
                    </div>
                    <div className ="col-4">
                    <Card 
                        img="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"
                        title = "Kajian Koding #1"
                        text = "Belajar Laravel Dasar"/>
                    </div>
                </div>
                <div>
                    <Button outline color="success">Lihat Seluruh Kajian Koding</Button>
                </div>
                <hr className="my-2 mt-4" />
            </div>
        </div>
    );
  }
}

export default FirstRow;
