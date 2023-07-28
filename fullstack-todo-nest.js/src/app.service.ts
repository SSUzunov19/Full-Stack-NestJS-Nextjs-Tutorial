import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private configService: ConfigService) { }

  getHello(): string {
    this.logger.log(this.configService.get('APP_NAME'));
    return 'Hello World!';
  }
}
