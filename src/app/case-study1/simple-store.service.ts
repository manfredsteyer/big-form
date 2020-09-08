import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface State {
  info1: string;
  info2: string;
}

export const initialState: State = {
  info1: '',
  info2: ''
};

@Injectable({
  providedIn: 'root'
})
export class SimpleStore {

  state = new BehaviorSubject<State>(initialState);

  constructor() { }

  setState(state: State): void {
    this.state.next(state);
  }

}
