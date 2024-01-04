import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from './payment.model';
import { CreatePaymentDto, UpdatePaymentDto } from './payment.dto';



@Controller('payment')
export class PaymentController {
    constructor(private readonly PaymentService: PaymentService) { }
    @Post()
    async create(@Body() CreatePaymentDto: Payment): Promise<Payment> {
        return this.PaymentService.create(CreatePaymentDto);
    }

    @Get()
    async findAll(): Promise<Payment[]> {
        return this.PaymentService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Payment> {
        return this.PaymentService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() UpdatePaymentDto: Payment): Promise<Payment> {
        return this.PaymentService.update(id, UpdatePaymentDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.PaymentService.delete(id);
    }

}
