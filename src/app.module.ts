import { Module } from '@nestjs/common';
import { GreetingsModule } from './modules/greetings/greetings.module.js';
import { PeopleModule } from './modules/people/people.module.js';
import { AccountsModule } from './modules/accounts/accounts.module.js';
import { PurchasesModule } from './modules/purchases/purchases.module.js';
import { MysqlModule } from './modules/shared/infrastructure/mysql/mysql.module.js';


@Module({
  imports: [GreetingsModule,PeopleModule,AccountsModule,PurchasesModule,MysqlModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
