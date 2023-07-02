import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getV1(): string {
    return 'V1 Root';
  }
}
