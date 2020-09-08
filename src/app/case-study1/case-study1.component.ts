import { Component, OnInit } from '@angular/core';
import { SimpleStore, State } from './simple-store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectIsBothValid } from './selectors';



@Component({
  selector: 'app-case-study1',
  templateUrl: './case-study1.component.html',
  styleUrls: ['./case-study1.component.css'],
  providers: [SimpleStore]
})
export class CaseStudy1Component implements OnInit {

  constructor(private store: SimpleStore) { }

  valid$: Observable<any>;
  state$: Observable<State>;

  ngOnInit(): void {
    this.state$ = this.store.state;
    // this.valid$ = this.store.state.pipe(map(state => !!(state.info1 && state.info2)));
    this.valid$ = this.store.state.pipe(map(s => ({
      isBothValid: selectIsBothValid(s)
    })));

  }

}
