import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { map } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
import { Observable, Subject, pipe} from 'rxjs';

const httpOptions = {
 headers: new HttpHeaders({
   'Content-Type':  'application/json'
 })
};
interface News {
    status: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsStatusService {

  constructor(private http: HttpClient) { }

  status:string="Partially Fake";


  postStatus(data) {
    console.log("logs before post call---",data);
    return this.http.post('/saveStatus', {status: data})
                    .subscribe();
   }

  getStatus(){
    let temp = this.http.get('/getStatus').pipe(map(response => response));
    //console.log(temp,"temp");
    return temp;

    // return this.http.get(this._getUrl)
    //                 .map(res => res.json());
  }
}
