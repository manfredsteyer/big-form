import { Component, OnInit } from '@angular/core';
import { SimpleStore } from '../simple-store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectIsBothValid } from '../selectors';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css']
})
export class Tab3Component implements OnInit {

  valid$ = this.store.state.pipe(map(selectIsBothValid));


  constructor(private store: SimpleStore) { }

  ngOnInit(): void {
  }

}
