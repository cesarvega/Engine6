import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CrudService } from '../crud.service';

@Injectable()
export class EcommerceOrderService implements Resolve<any>
{
    routeParams: any;
    order: any;
    onOrderChanged: BehaviorSubject<any>;
    webApiUrl = '';
    apiCall = 'api/ims-orders/';
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private _crudService: CrudService
    )
    {
        // Set the defaults
        this.onOrderChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getOrder()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get order
     *
     * @returns {Promise<any>}
     */
    getOrder(): Promise<any>
    {
        this.webApiUrl = this._crudService.getWebApiUrl();
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.webApiUrl + this.apiCall + this.routeParams.id)
                .subscribe((response: any) => {
                    this.order = response;
                    this.onOrderChanged.next(this.order);
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Save order
     *
     * @param order
     * @returns {Promise<any>}
     */
    saveOrder(order): Promise<any>
    {
        this.webApiUrl = this._crudService.getWebApiUrl();
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.webApiUrl + this.apiCall + order.orderId, order)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Add order
     *
     * @param order
     * @returns {Promise<any>}
     */
    addOrder(order): Promise<any>
    {
        this.webApiUrl = this._crudService.getWebApiUrl();
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.webApiUrl + this.apiCall, order)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
