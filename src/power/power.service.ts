import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    console.log(`Power is supplied with ${watts} watts`);
    return 'Power is supplied';
  }
}
