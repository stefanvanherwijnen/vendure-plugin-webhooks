import { OrderService, RequestContext } from '@vendure/core';
export declare class WebhooksController {
    private orderService;
    constructor(orderService: OrderService);
    paymentSettle(ctx: RequestContext, id: number): string;
}
