import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpModule } from '../http.module';

export type ApiResponse<T = any> = {
  status: 'ok' | 'ko';
  data: T;
};

@Injectable({
  providedIn: HttpModule,
})
export class FakeHttpService {
  get(endpoint: string, data: URLSearchParams): Observable<any> {
    return of({
      status: 'ok',
      data: [],
    });
  }
}
