import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Deal } from './entities/deal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deal) private readonly dealRepository: Repository<Deal>,
  ) {}

  async create(createDealDto: CreateDealDto) {
    const { title, amount, ticket, yieldItem, daysLeft, sold, picture } =
      createDealDto;
    console.log(createDealDto);

    const existDeal = await this.dealRepository.findOne({
      where: {
        title: title,
      },
    });

    if (existDeal) throw new BadRequestException('This deal already exists!');

    const deal = await this.dealRepository.save({
      title,
      amount,
      ticket,
      yieldItem,
      daysLeft,
      sold,
      picture,
    });

    return { deal };
  }

  async findAll() {
    const deals = await this.dealRepository.find({});
    return deals;
  }

  findOne(id: number) {
    return `This action returns a #${id} deal`;
  }
}
