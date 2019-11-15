import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
                  
@Injectable({                                         
  providedIn: 'root'
})
export class UsersService {

  baseURL: any = environment.BASEURL;
  header: any;

  constructor(private http: HttpClient) { 
    this.header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

}

createHeader() {
  return new HttpHeaders({
    'Content-Type': 'application/json',
  });
}
login(credentials): Observable<any> {
  return this.http.post(this.baseURL + '/api/authenticate', credentials, {
    headers: this.header
  });
}

register(credentials): Observable<any> {
  return this.http.post(this.baseURL + '/api/register', credentials, {
    headers: this.header
  });
}

getAllUsers(): Observable<any> {
  return this.http.get(this.baseURL + '/api/getAll', {
    headers: this.header
  });
}

}
