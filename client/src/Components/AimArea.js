import React, { Component } from 'react';

export default class AimArea extends Component {
    constructor () {
        super();

        var left = window.innerWidth - (window.innerWidth * 0.05 + window.innerWidth * 0.2);
        var top = window.innerHeight - (window.innerWidth * 0.05 + window.innerWidth * 0.2);
        var width = window.innerWidth * 0.2;
        var height = window.innerWidth * 0.2;

        this.state = {
            areaLeft: left,
            areaTop: top,
            areaWidth: width,
            areaHeight: height,

            centerX: left + width / 2,
            centerY: top + height / 2,

            projLeft: 0,
            projRight: 0
        };

        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);

        this.onResize = this.onResize.bind(this);
    }

    componentDidMount () {
        window.onResizeAimArea = this.onResize;
    }

    onResize() {
        var left = window.innerWidth - (window.innerWidth * 0.05 + window.innerWidth * 0.2);
        var top = window.innerHeight - (window.innerWidth * 0.05 + window.innerWidth * 0.2);
        var width = window.innerWidth * 0.2;
        var height = window.innerWidth * 0.2;

        this.setState({
            areaLeft: left,
            areaTop: top,
            areaWidth: width,
            areaHeight: height,

            centerX : left + width / 2,
            centerY : top + height / 2
        });
    }

    onTouchEnd (e) {
        e.stopPropagation();

        var touches = e.changedTouches;

        var deltaX = touches[0].pageX - this.state.centerX;
        var deltaY = touches[0].pageY - this.state.centerY;

        //var angle = Math.atan2(deltaY, deltaX);
        var normalizedX = deltaX / (this.state.areaWidth / 2);
        var normalizedY = deltaY / (this.state.areaHeight / 2);

        // console.log("Angle : " + angle);

        //console.log("ratioXY: " + ratioXY);

        // x component

        console.log('normalizedX: ' + normalizedX);
        console.log('normalizedY: ' + normalizedY);

        var sum = Math.abs(normalizedX) + Math.abs(normalizedY);

        var ratio = 1 / sum;

        console.log('ratio: ' + ratio);
        normalizedX *= Math.abs(ratio);
        normalizedY *= Math.abs(ratio);

        console.log(
            'normalized new values, x: ' + normalizedX + ' y: ' + normalizedY
        );

        var projLeft = window.innerWidth / 2 + normalizedX * 100;
        var projTop = window.innerHeight / 2 + normalizedY * 100;

        this.setState({
            projLeft: projLeft,
            projTop: projTop
        });

    // y component
    }

    onTouchMove (e) {
        e.stopPropagation();
    //console.log("area onTouchMove");
    }

    onTouchStart (e) {
        e.stopPropagation();
    //console.log("area onTouchStart");
    }

    render () {
        return (
      <>
        <div
            id="aim-area"
            onTouchStart={this.onTouchStart}
            onTouchMove={this.onTouchMove}
            onTouchEnd={this.onTouchEnd}
            style={{
                top: this.state.areaTop,
                left: this.state.areaLeft,
                width: this.state.areaWidth,
                height: this.state.areaHeight
            }}
        />

        <div
            id="aim-dot"
            style={{
                left: this.state.centerX - 1,
                top: this.state.centerY - 1,
                width: 2,
                height: 2
            }}
        />

        <div
            id="aim-projectile"
            style={{
                left: this.state.projLeft,
                top: this.state.projTop,
                width: 2,
                height: 2
            }}
        />

        <div
            id="center-dot"
            style={{
                left: window.innerWidth / 2,
                top: window.innerHeight / 2,
                width: 2,
                height: 2
            }}
        />
      </>
        );
    }
}
