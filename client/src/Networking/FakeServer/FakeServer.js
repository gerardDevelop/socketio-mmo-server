import MsgCodes from '../MsgCodes';
import World from './World';

export default class FakeServer {

  constructor() {
    this.connections = {};
    this.worlds = {};

    //instantiate default world

  }

  onReceiveMsg(msgCode, socketId, data) {
    console.log("Received msg from client! " + msgCode);

    switch(msgCode) {
      case MsgCodes.connect: 
        console.log("received connection msg from client!");  
        break;
    }
  }

  update(delta, time) {
    Object.values(this.worlds).forEach(world => {
      world.update(delta, time);
    });
  }

  onRequestConnection() {
    // create new Socket

  }

  onReceiveConnection(socket) {
    
  }
}