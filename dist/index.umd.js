/**
 * MIT License
 *
 * Copyright (c) 2020 Stefan van Herwijnen
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@vendure/core'), require('@nestjs/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@vendure/core', '@nestjs/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jsonApiStore = {}, global.core, global.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    let WebhooksController = class WebhooksController {
        constructor(orderService) {
            this.orderService = orderService;
        }
        // @Get()
        // findAll(@Ctx() ctx: RequestContext) {
        //     return 'ok'
        // }
        paymentSettle(ctx, orderId) {
            console.log(this.orderService);
            this.orderService.getOrderPayments(ctx, orderId).then(payments => {
                payments.forEach(payment => this.orderService.settlePayment(ctx, payment.id));
            });
            return 'Notified';
        }
    };
    __decorate([
        common.Get('orders/:orderId/settle'),
        __param(0, core.Ctx()), __param(1, common.Param('orderId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [core.RequestContext, Number]),
        __metadata("design:returntype", void 0)
    ], WebhooksController.prototype, "paymentSettle", null);
    WebhooksController = __decorate([
        common.Controller('webhooks'),
        __metadata("design:paramtypes", [core.OrderService])
    ], WebhooksController);

    exports.WebhooksPlugin = class WebhooksPlugin {
    };
    exports.WebhooksPlugin = __decorate([
        core.VendurePlugin({
            imports: [core.PluginCommonModule],
            controllers: [WebhooksController],
            providers: [core.OrderService],
        })
    ], exports.WebhooksPlugin);

    Object.defineProperty(exports, '__esModule', { value: true });

})));
