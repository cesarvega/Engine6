import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, ObjectUnsubscribedError } from 'rxjs';

@Injectable()
export class AnalyticsDashboardService implements Resolve<any>
{
    widgets: any[];
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': ''
        })
      };
    private _SP_getSurveySummary = '[BI_MEMBERS].[dbo].[pm_getSummary] ';
    protected API_URL = 'https://tools.brandinstitute.com/BIWebServices/' + 'api/BiFormCreator/';

    constructor(private _httpClient: HttpClient) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getWidgets()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    // get survey summary by username
    private getSurveySummary(username: string): Observable<any> {
        const bodyString = JSON.stringify(this._SP_getSurveySummary + '\'' + username + '\'');
        const url = `${this.API_URL}`;
        return this._httpClient.post(url, bodyString, this.httpOptions);
    }


    getWidgets(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/analytics-dashboard-widgets')
                .subscribe((response: any) => {
                    this.getSurveySummary('cvega@1.com').subscribe( res => {
                        if (res) {                     
                            let amount  =  JSON.parse(res[0].json).maxamount;
                            amount =  Math.ceil(amount / 100) * 100;
                            response.widget1.options.scales.yAxes[0].ticks.max = amount;                                                                                    
                            const parseData = JSON.parse(res[0].json);   
                            response.widget1.datasets = parseData.DataSet;   
                            response.widget1.totalAmount  = parseData.Summary[0].Amount;   
                            response.widget1.totalAmountSurveys  = parseData.Detail.length;   
                            response.widget1.avg  = parseData.Summary[1].Amount;   
                            this.widgets = response;
                            resolve(response);                              
                        }
                    } );
                  
                }, reject);
        });
    }
}
