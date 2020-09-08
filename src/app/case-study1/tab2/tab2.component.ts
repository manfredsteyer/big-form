import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SimpleStore, State } from '../simple-store.service';
import { map } from 'rxjs/operators';
import { selectIsInput1Valid, selectIsInput2Valid } from '../selectors';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {

  formControl = new FormControl();

  constructor(private store: SimpleStore) { }

  state$ = this.store.state;
  state: State;
  valid$ = this.store.state.pipe(map(selectIsInput2Valid));

  ngOnInit(): void {
    this.state$.subscribe(state => {
      this.formControl.setValue(state.info2);
      this.state = state;
    });
  }

  next(): void {

      this.store.setState({
      ...this.state,
      info2: this.formControl.value,
     });
  }

}
