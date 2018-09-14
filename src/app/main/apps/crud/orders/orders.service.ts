import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CrudService } from '../crud.service';

@Injectable()
export class EcommerceOrdersService implements Resolve<any>
{
    orders: any[];
    onOrdersChanged: BehaviorSubject<any>;
    webApiUrl = '';
    apiCall = 'api/ims-orders';
    constructor(
        private _httpClient: HttpClient,
        private _crudService: CrudService
    )
    {
        // Set the defaults
        this.onOrdersChanged = new BehaviorSubject({});
    }

   
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([               
                this.getOrders()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

   
    getOrders(): Promise<any>
    {
        this.webApiUrl = this._crudService.getWebApiUrl();
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.webApiUrl + this.apiCall)
                .subscribe((response: any) => {
                    this.orders = response;
                    this.onOrdersChanged.next(this.orders);
                    resolve(response);
                }, reject);
        });
    }
}
