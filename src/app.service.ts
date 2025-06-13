import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class AppService {
  constructor(private commandBus: CommandBus) {}

  // async killDragon(heroId: string, killDragonDto:)
}
