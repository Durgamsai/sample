import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  Employee(employee: Employee): void | Observable<Object> {
    throw new Error('Method not implemented.');
  }
  private baseURL = "http://localhost:9090/api/v1/employees";

  

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  createEmployee(employee: Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }
  getEmployeeId(id: number): Observable<Employee> {
    return this.httpClient.get<Employee> (`${this.baseURL}/${id}`);
    }
  updateEmployee(id: number, employee: Employee): Observable<Object>{
      return this.httpClient.put(`$(this.baseURL)/${id}`, employee);
    }

    deleteEmployee(id: number):Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
