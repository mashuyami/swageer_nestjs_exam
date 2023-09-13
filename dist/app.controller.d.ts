import { AppService } from './app.service';
import { AdminInput } from './dto/admin-input';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    postHello(req: AdminInput): {
        success: AdminInput;
    };
}
