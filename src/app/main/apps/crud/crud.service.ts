import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CrudService {
    webApiUrl = 'https://ng6-node-app-cczukqmulz.now.sh/';
    apiCall = 'api/ims-orders/';
    
    getWebApiUrl(): string
    {
        return this.webApiUrl;        
    }

}
