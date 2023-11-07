import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJob } from '../Models/IJob';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

constructor(private http: HttpClient) { }

getAllJobs(): Observable<IJob[]> {
  return this.http.get<IJob[]>(`${environment.api}/jobs`);
}

}
