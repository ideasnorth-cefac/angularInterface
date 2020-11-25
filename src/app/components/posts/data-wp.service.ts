import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { post_interface } from './post.interface';
import { Observable } from 'rxjs';

@Injectable()
export class DataWpService {

  constructor(private http: HttpClient) { }
  urlApi='http://test.comounapina.es/wp-json/urlShortener/v1/url-list';

  getPost(): Observable <post_interface[]> 
  {
    return this.http.get<post_interface[]>(this.urlApi,  {
      params: {
        per_page:'1'
      }
    });
  }
}
