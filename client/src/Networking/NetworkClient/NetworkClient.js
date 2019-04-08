import MsgCodes from '../MsgCodes';

export default class NetworkClient {
  constructor() {
    this.socketId = 1;
    this.connected = false;
  }

  onReceiveMsg() {

  }

  connect() {
    window.fakeServer.onReceiveMsg(MsgCodes.connect, this.socketId);
  }

  onSuccessfulConnection() {
    this.connected = true;
  }
 
  onDisconnect() {

  }



}