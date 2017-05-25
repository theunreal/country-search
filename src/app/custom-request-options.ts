import {BaseRequestOptions, RequestOptions, RequestOptionsArgs, Headers}
 from '@angular/http';

export class CustomRequestOptions extends BaseRequestOptions {

  merge(options?:RequestOptionsArgs):RequestOptions {
    options.url = 'https://restcountries.eu/rest/v1/name/'+options.url;

  	if (options.method === 1) {
    	let headers = new Headers();
    	headers['Content-Type'] = 'application/json';
    	headers.append('Content-Type', 'application/json');
      options.headers = headers;
  	}
      return super.merge(options);
    }

}
