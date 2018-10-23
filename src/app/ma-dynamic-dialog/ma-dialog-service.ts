import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class MaDialogService {

  // Observable string sources
  private onDialogShown = new Subject<any>();

  // Observable string streams
  incomingDialogEvent = this.onDialogShown.asObservable();

  show(input: any){
    this.onDialogShown.next(input)
  }

}
