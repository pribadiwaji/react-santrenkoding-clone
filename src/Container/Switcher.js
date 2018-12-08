import React, { Component } from 'react';
import Home from '../Container/Home';
import Kajian from '../Container/Kajian';
import Mondok from '../Container/Mondok';
import Kitab from '../Container/Kitab';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class App extends Component {
    state={
        page : "Home"
    }

    handleChanePage = (params)=>{
        this.setState({
            page : params
        })
    }
    render() {
                if (this.state.page === "Home") {
                    return (
                        <div>
                            <Header changePage={this.handleChanePage}/>
                            <Home/>
                            <Footer/>
                        </div>
                    );
                }
                if (this.state.page === "Kajian") {
                    return (
                        <div>
                            <Header changePage={this.handleChanePage}/>
                            <Kajian/>
                            <Footer/>
                        </div>
                    );
                }
                if (this.state.page === "Mondok") {
                    return (
                        <div>
                            <Header changePage={this.handleChanePage}/>
                            <Mondok/>
                            <Footer/>
                        </div>
                    );
                }
                if (this.state.page === "Kitab") {
                    return (
                        <div>
                            <Header changePage={this.handleChanePage}/>
                            <Kitab/>
                            <Footer/>
                        </div>
                    );
                }
            }
}

export default App;
