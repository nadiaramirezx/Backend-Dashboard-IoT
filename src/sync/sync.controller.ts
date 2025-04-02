import { Controller, Get } from '@nestjs/common';
import { SyncService } from './sync.service';

@Controller()
export class SyncController {
  constructor(private readonly syncService: SyncService) {}

  @Get('/sync')
  async sync() {
    return await this.syncService.syncData();
  }
}