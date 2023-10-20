import { Injectable } from '@nestjs/common';

export type MyString = {
  description: string;
};

@Injectable()
export class AppService {
  getHello(): MyString {
    return { description: 'bla bla bla' };
  }
}
