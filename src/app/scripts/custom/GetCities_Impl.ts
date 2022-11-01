import { Injectable } from '@angular/core';
import _ from "lodash";
import { Observable } from "rxjs";
import { ApperyioHelperService } from '../apperyio/apperyio_helper';
import { EntityApiService } from '../apperyio/apperyio';
import { paramsParse } from '../apperyio/apperyio_restservice';
import { ApperyioConfigService } from '../apperyio/config_service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
class GetCities {
    
    public cities = [{name: 'New York'}, {name: 'Bangkok'}, {name: 'London'}, {name: 'Paris'}, {name: 'Dubai'}, {name: 'Singapore'}];
    
    constructor(private entityAPI: EntityApiService, private Apperyio: ApperyioHelperService, private http: HttpClient, private ConfigService: ApperyioConfigService) {
    }
    
    execute(reqOpts?: any) {
        return new Observable((observer) => {
            try {
                (async () => {
                    let srvName = await this.Apperyio.getGSNameByImpl(this);
                    if (!srvName) {
                        observer.error("Service was not found");
                        return;
                    }
                    let service = this.entityAPI.get(srvName),
                        echo = service.echo,
                        defaults = service.request.data,
                        request,
                        response;
                    if (_.isUndefined(echo)) {
                        /**
                         * Passed request data structure IS RECOMMENDED to match the default request, described in service!
                         * An example of how to merge default request data with passed data (_.extend() should be used with flat objects only):
                         */
                        request = _.extend({}, defaults, reqOpts.data);
                        // Substitute config services data with actual data
                        request = paramsParse(request, {}, this.ConfigService.all());

                        /**
                         * CUSTOM CODE for processing request and forming responce could be placed here
                         * Response structure IS RECOMMENDED to match default response, described in service!
                         * An example of forming an empty response:
                         */
                        

                        observer.next(this.cities.filter(city => city.name.toLowerCase().indexOf(request.query.toLowerCase()) >= 0));
                        observer.complete();
                    } else {
                        try {
                            echo = JSON.parse(echo);
                        } catch (e) {
                        }

                        observer.next(echo);
                        observer.complete();
                    }
                })()
            } catch (e) {
                observer.error("Some error");
            }
        });
    }
}

/*
    Service class should be exported as ExportedClass
*/
export { GetCities as ExportedClass };