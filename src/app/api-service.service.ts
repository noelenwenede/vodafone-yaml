import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  /**
   * This service gets the yaml file from the API.
   * API has only one endpoint and returns the yaml file
   */
  getYaml2(): Observable<any> {
    return this.http.get("http://localhost:8080", {responseType: 'blob'}).pipe(
      catchError(this.handleError)
    )
  }

  
  /**
   * this process the error and just sends back the error body
   * as a json object
   * @param res 
   * 
   */
  handleError(res: Response | any | object) {
    let errMsg: string;
    if (res.status == 0) {
      return throwError(
        {
          name: 'Failed to connect server',
          message: "You're not connected to the internet or have a slow internet connection"
        }
      )
    } else {
      return throwError(res.error || res.body);
    }
  }
}
