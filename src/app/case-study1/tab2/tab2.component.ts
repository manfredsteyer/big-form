import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SimpleStore, State } from '../simple-store.service';
import { map } from 'rxjs/operators';
import { selectIsInput1Valid, selectIsInput2Valid } from '../selectors';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component  {

  @Input() form: FormGroup;

  valid$ = this.form?.statusChanges.pipe(map(x => this.form.valid));

  ngOnInit() {
    this.valid$ = this.form?.statusChanges.pipe(map(x => this.form.valid));
    this.form.addControl('bla', new FormControl('Hallo'));
  }

  next(): void {
  }

}
