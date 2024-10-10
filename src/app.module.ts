import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import { LevelModule } from './level/level.module';
@Module({
  imports: [DrizzleModule, ConfigModule.forRoot({ isGlobal: true }), LevelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}