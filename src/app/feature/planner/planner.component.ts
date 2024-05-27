import { Component, inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { ActivatedRoute } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { NewPointComponent } from './components/new-point/new-point.component';
import { Point } from '@shared/models/Points';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [
    LayoutComponent,
    NewPointComponent
  ],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',
})
export class PlannerComponent {
  activatedRoute = inject(ActivatedRoute);
  title = this.activatedRoute.snapshot.title || '';

  onAddNewPoint(point: Point) {
    console.log(point)
  }
}
