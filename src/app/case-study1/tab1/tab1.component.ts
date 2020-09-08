import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SimpleStore, State } from '../simple-store.service';
import { first, map } from 'rxjs/operators';
import { selectIsInput1Valid } from '../selectors';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

  formControl = new FormControl();

  constructor(private store: SimpleStore) { }

  state$ = this.store.state;
  state: State;

  valid$ = this.store.state.pipe(map(selectIsInput1Valid));

  ngOnInit(): void {


    this.state$.subscribe(state => {
      this.formControl.setValue(state.info1);
      this.state = state;
    });
  }

  next(): void {

      this.store.setState({
      ...this.state,
      info1: this.formControl.value,
     });
  }

}
