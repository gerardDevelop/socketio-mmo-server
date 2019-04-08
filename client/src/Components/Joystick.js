import React, { Component } from 'react';

// TODO - REIMPLEMENT THIS IN CANVAS OR INSIDE PHASER SCENE WITH A SPRITE, to reduce cpu load

export default class Joystick extends Component {
    constructor (props) {
        super(props);

        var x = window.innerWidth * 0.1;
        var y = window.innerHeight - (window.innerWidth * 0.1 + window.innerWidth * 0.1);
        var w = window.innerWidth * 0.1;
        var h = window.innerWidth * 0.1;

        this.state = {
            //stickLeft: window.joystickManager.x,
            //stickTop: window.innerHeight - 77.5,
            //stickWidth: 30,
            // stickHeight: 30,

            x: x,
            y: y,
            w: w,
            h: h,
            centerX : x + w / 2,
            centerY : y + h / 2,

        };

        //this.setJoystickPos = this.setJoystickPos.bind(this);
        //this.resetJoystickPos = this.resetJoystickPos.bind(this);

        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTouchCancel = this.onTouchCancel.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onResize = this.onResize.bind(this);
    }

    componentDidMount () {
        window.joystick = this;
        window.onResizeJoystick = this.onResize;
    }

    onResize() {
        var x = window.innerWidth * 0.1;
        var y = window.innerHeight - (window.innerWidth * 0.1 + window.innerWidth * 0.1);
        var w = window.innerWidth * 0.1;
        var h = window.innerWidth * 0.1;

        this.setState({
            x: x,
            y: y,
            w: w,
            h: h,
            centerX : x + (w / 2),
            centerY : y + (h / 2)
        });
    }

    onTouchStart (e) {
        var touches = e.changedTouches;

        for (var i = 0; i < touches.length; i++) {
            //console.log("tstart, x: " + touches[i].pageX + " y: " + touches[i].pageY);

            // TODO check for bounds

            //console.log("area bounds: " + window.joystick.areaBoundsX);

            if (touches[i].pageX < window.innerWidth / 2) {
                this.onReceiveJoystickTouchCoords(touches[i].pageX, touches[i].pageY);

                // window.joystick.setJoystickPos( touches[i].pageX, touches[i].pageY)
            }
        }

    // skip testing if touch is in bounds of the joystick circle area for now..
    }

    onTouchEnd (e) {
        this.stopJoystickMovement();
    }

    onTouchCancel (e) {}

    onTouchMove (e) {
        e.stopPropagation();

        var touches = e.changedTouches;

        for (var i = 0; i < touches.length; i++) {
            if (touches[i].pageX < window.innerWidth / 2) {
                this.onReceiveJoystickTouchCoords(touches[i].pageX, touches[i].pageY);
            } else {
                this.stopJoystickMovement();
            }
        }
    }

    stopJoystickMovement () {
        console.log('stopping joy movement');

        window.mainScene.playerToMove.x = 0;
        window.mainScene.playerToMove.y = 0;
    }

    onReceiveJoystickTouchCoords (x, y) {
        var deltaX = x - this.state.centerX;
        var deltaY = y - this.state.centerY;

        // find hypoteneuse
        var dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (dist > this.state.w / 2) {
            // get ratio of dist to max
            var ratio = dist / this.state.w;

            deltaX /= ratio;
            deltaY /= ratio;
        }

        //var angle = Math.atan2(deltaY, deltaX);
        var normalizedX = deltaX / (this.state.w / 2);
        var normalizedY = deltaY / (this.state.h / 2);

        // console.log("Angle : " + angle);

        //console.log("ratioXY: " + ratioXY);

        // x component

        // console.log("normalizedX: " + normalizedX );
        // console.log("normalizedY: " + normalizedY );

        // normalize further

        //pass on x , y to scene

        window.mainScene.playerToMove.x = normalizedX;
        window.mainScene.playerToMove.y = normalizedY;
    }

    render () {

        return (
      <>
        <div
            id="joystick-circle"
            style={{
                left: this.state.x,
                top: this.state.y,
                width: this.state.w,
                height: this.state.h
            }}
        />

        <div
            id="joystick-toucharea"
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: window.innerWidth / 3,
                height: window.innerHeight
            }}
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}
            onTouchMove={this.onTouchMove}
        />
      </>
        );
    }
}
