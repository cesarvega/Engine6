import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';

@Injectable()
export class EcommerceProductsService implements Resolve<any>
{
    products: any[];
    now = false;
    webApiUrl = 'https://ng6-node-app-boldepvhqf.now.sh/';
    apiCall = 'api/bi-surveys';
    API_URL = 'https://tools.brandinstitute.com/BIWebServices/' + 'api/BiFormCreator/';
    api_call = '[RESPONDENTS].[dbo].[pm_GetSurveyHistory] ' + '\'antoniostiriti@libero.it\',' + '\'2\'';
    private headers = { headers: new HttpHeaders().set('content-type', 'application/json').set('Accept', 'application/json') };
    onProductsChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) {
        // Set the defaults
        this.onProductsChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getSurveys()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
    getSurveys(): Promise<any> {
        return new Promise((resolve, reject) => {

            if (this.now) {
                this._httpClient.get( this.webApiUrl + this.apiCall)
                    .subscribe((response: any) => {
                        this.products = response;
                        this.onProductsChanged.next(this.products);
                        resolve(response);
                    }, reject);
            } else {               
                const api_call = JSON.stringify(this.api_call);
                return this._httpClient.post(this.API_URL, api_call, this.headers)
                    .subscribe((response: any) => {
                        this.products = response;
                        this.onProductsChanged.next(this.products);
                        resolve(response);
                    }, reject);
                }
            });
    }
}
