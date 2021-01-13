import { OrderService, PluginCommonModule, VendurePlugin, OnVendureBootstrap } from '@vendure/core';
import { WebhooksController } from './webhooks-controller';

@VendurePlugin({
    imports: [PluginCommonModule],
    controllers: [WebhooksController],
    providers: [OrderService],
})
export class WebhooksPlugin {

}