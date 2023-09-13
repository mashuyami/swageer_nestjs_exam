import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const opption = new DocumentBuilder()
    .setTitle('demo swagger')
    .setDescription('Demo swagger')
    .setVersion('1.0')
    .setBasePath('api')
    .addBearerAuth()
    .addTag('demo')
    .build();

  const document = SwaggerModule.createDocument(app, opption);
  SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
}
bootstrap();
