import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { WebhooksController } from './webhooks-controller';

@VendurePlugin({
    imports: [PluginCommonModule],
    controllers: [WebhooksController],
})
export class WebhooksPlugin {}