import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http:HttpClient) {

   }

   public getAllCustomers():Observable<Array<Customer>>
   {
      return this.http.get<Customer[]>('http://localhost:8090/customers')
   }

}
