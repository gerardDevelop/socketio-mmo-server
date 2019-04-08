import React, { Component } from 'react';
import './App.css';
import Joystick from './Components/Joystick';
import AimArea from './Components/AimArea';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {};

        this.onTouchCancel = this.onTouchCancel.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onResize = this.onResize.bind(this);
    }

    componentDidMount () {
        window.onResize = this.onResize;
    }

    getJoystickCenterPos () {
    //var x = this.state.joystickleft + this.state.joystickwidth / 2;
    // need to get screen height, and subtract joystickbottom and joystickheight / 2
    }

    onTouchCancel (e) {
        e.stopPropagation();
        //console.log('onTouchCancel');
    }

    onTouchEnd (e) {
        e.stopPropagation();
        console.log('onTouchEnd');
    }

    onTouchMove (e) {
        e.stopPropagation();
        console.log('onTouchMove');
    }

    onTouchStart (e) {
        e.stopPropagation();
        console.log('onTouchStart');

    // check if it is in joystick region
    }

    onResize (e) {

    }

    render () {
        /*
        const oldReturn = (
            <div
                className="App"
                onTouchCancel={this.onTouchCancel}
                onTouchEnd={this.onTouchEnd}
                onTouchMove={this.onTouchMove}
                onTouchStart={this.onTouchStart}
            />
        );
        */


        return (
            <div className="App">
                <Joystick />
                <AimArea />
            </div>
        );
    }
}

export default App;
