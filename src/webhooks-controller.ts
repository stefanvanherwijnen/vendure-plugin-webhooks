import { Controller, Get, Param } from '@nestjs/common';
import { Ctx, OrderService, RequestContext } from '@vendure/core'; 

@Controller('webhooks')
export class WebhooksController {
    constructor(private orderService: OrderService) {}

    @Get('payments/:id')
    paymentSettle(@Ctx() ctx: RequestContext, @Param('id') id: number) {
        this.orderService.settlePayment(ctx, id)
        return 'Notified'
    }
}