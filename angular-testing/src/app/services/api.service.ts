import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  instance = axios.create({
    // baseURL: environment.apiUrl,
    // headers: { 'Access-Control-Allow-Origin': '*', 'X-PRIVATE-ACCESS-KEY': `${environment.accessKey}`, 'Content-Type': 'application/json', 'Accept': 'application/json' }
  });
  constructor() {

  }

  getRatesData() {
    // return axios.get(`${environment.apiUrl}rate-calculator-data`, {
    //   headers: { 'Access-Control-Allow-Origin': '*', 'X-PRIVATE-ACCESS-KEY': `${environment.accessKey}`, 'Content-Type': 'application/json', 'Accept': 'application/json' }
    // })
  }

  submitContactForm(name: string, email: string, message: string) {
    return this.instance.post(`contact-us-form`, {
      name: name,
      email: email,
      message: message,
    },
    );
  }
}
