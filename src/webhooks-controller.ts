import { Controller, Get, Param } from '@nestjs/common';
import { Ctx, OrderService, RequestContext } from '@vendure/core'; 

@Controller('webhooks')
export class WebhooksController {
    constructor(private orderService: OrderService) {}

    // @Get()
    // findAll(@Ctx() ctx: RequestContext) {
    //     return 'ok'
    // }

    @Get('orders/:orderId/settle')
    paymentSettle(@Ctx() ctx: RequestContext, @Param('orderId') orderId: number) {
        console.log(this.orderService)
        this.orderService.getOrderPayments(ctx, orderId).then(payments => {
            payments.forEach(payment => this.orderService.settlePayment(ctx, payment.id))
        })
        return 'Notified'
    }
}