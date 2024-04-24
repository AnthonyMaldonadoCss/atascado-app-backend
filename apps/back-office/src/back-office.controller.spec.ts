import { Test, TestingModule } from '@nestjs/testing';
import { BackOfficeController } from './back-office.controller';
import { BackOfficeService } from './back-office.service';

describe('BackOfficeController', () => {
  let backOfficeController: BackOfficeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BackOfficeController],
      providers: [BackOfficeService],
    }).compile();

    backOfficeController = app.get<BackOfficeController>(BackOfficeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(backOfficeController.getHello()).toBe('Hello World!');
    });
  });
});
