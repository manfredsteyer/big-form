import { Component, OnInit, Input } from '@angular/core';
import { SimpleStore } from '../simple-store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectIsBothValid } from '../selectors';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css']
})
export class Tab3Component implements OnInit {

  @Input() form: FormGroup;

  valid$ = this.form?.statusChanges.pipe(map(x => this.form.valid));
  
  constructor(private store: SimpleStore) { }

  ngOnInit(): void {
    this.valid$ = this.form?.statusChanges.pipe(map(x => this.form.valid));

  }

}
