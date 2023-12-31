import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable,throwError} from "rxjs";
import {Contrat} from "../../interface/contrat";
import {apicontrat} from "../../api/apicontrat";
import {tap,catchError} from  "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http: HttpClient) { }

  public getContrat(): Observable<Contrat[]>{
    return this.http.get<Contrat[]>(apicontrat.getcontrat,{withCredentials: true}).pipe(
      tap(contrats=>console.log('apicontrat:', contrats)),
      catchError(this.handleError)
    )

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
