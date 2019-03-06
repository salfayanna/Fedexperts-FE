import { ErrorHandler, Injectable, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ErrorHandlingService implements ErrorHandler {

  private handleErrorSource = new Subject<String>();
  public handleError$ = this.handleErrorSource.asObservable();

  constructor() { }

  public handleError(error) {
    this.handleErrorSource.next(error.error.error);
  }

}
