import { Module } from '@nestjs/common';
import { SocketClient } from './socket';

@Module({
  providers: [SocketClient],
})
export class SocketModule {}
