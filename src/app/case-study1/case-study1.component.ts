import { Component, OnInit } from '@angular/core';
import { SimpleStore, State } from './simple-store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-case-study1',
  templateUrl: './case-study1.component.html',
  styleUrls: ['./case-study1.component.css'],
  providers: [SimpleStore]
})
export class CaseStudy1Component implements OnInit {

  formGroup: FormGroup;

  valid$: Observable<boolean>;
  value$ = this.formGroup?.valueChanges;

  constructor(
    private fb: FormBuilder,
    private store: SimpleStore) { }


  ngOnInit(): void {

    // Abbild von Eurem Entity-Aggreat
    this.formGroup = this.fb.group({
      area1 : this.fb.group({
        info1: ['', Validators.required]
      }),
      area2: this.fb.group({
        info2: ['', Validators.required]
      })
    });

    this.valid$ = this.formGroup.statusChanges.pipe(map(s => this.formGroup.valid));

    this.value$ = this.formGroup?.valueChanges;


  }

}
