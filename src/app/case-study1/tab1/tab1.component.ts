import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SimpleStore, State } from '../simple-store.service';
import { first, map } from 'rxjs/operators';
import { selectIsInput1Valid } from '../selectors';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component  {

  @Input() form: FormGroup;

  valid$ = this.form?.statusChanges.pipe(map(x => this.form.valid));

  ngOnInit() {
    this.valid$ = this.form?.statusChanges.pipe(map(x => this.form.valid));
  }
  
  next(): void {
  }

}
