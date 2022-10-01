import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users.controller';
import { UserServices } from '../services/users.services';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserServices],//The main idea of a provider(service) is that it can be injected as a dependency
})
export class UsersModule {
  constructor() {
    console.log("UsersModule")
  }
}
