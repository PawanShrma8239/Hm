import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComService {
  private shideSubject = new Subject<boolean>();
  shide$ = this.shideSubject.asObservable();

  constructor() { }

  updateShide(value: boolean): void {
    this.shideSubject.next(value);
  }
}
