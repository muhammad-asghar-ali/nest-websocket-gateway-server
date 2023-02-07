import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost:3001');
  }

  onModuleInit() {
    this.registerConsumerEvents();
  }

  private registerConsumerEvents() {
    this.socketClient.emit('newMessage', { msg: 'hey there!' });
    this.socketClient.on('connection', () => {
      console.log('Connected');
    });
    this.socketClient.on('onMessage', (payload) => {
      console.log(payload);
    });
  }
}
