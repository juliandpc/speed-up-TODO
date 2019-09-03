import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const server = moduleFixture.createNestApplication();
    await server.init();
    app = await server.getHttpServer();
  });

  it('/ (GET)', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('GET /todos/1', () => {
    return request(app)
      .get('/todos/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({
        
      })
  });
});
