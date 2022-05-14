import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


// react-native run-android
//  npx react-native start
// sdk.dir = /home/gauravrajput/Android/Sdk
// local.properties
