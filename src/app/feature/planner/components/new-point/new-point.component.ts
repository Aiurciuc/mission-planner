import { Component, output } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Point } from '@shared/models/Points';

@Component({
  selector: 'app-new-point',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule],
  templateUrl: './new-point.component.html',
  styleUrl: './new-point.component.scss'
})
export class NewPointComponent {
  newPoint = output<Point>();

  pointForm =  new FormGroup({
    name: new FormControl('', [Validators.required]),
    xPoint: new FormControl(0, [Validators.required]),
    yPoint: new FormControl(0, [Validators.required])

  });

  onSubmit () {
    if(this.pointForm.valid) {
      this.newPoint.emit(this.pointForm.value as Point);
    }
  }
}
