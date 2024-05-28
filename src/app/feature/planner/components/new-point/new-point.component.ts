import { ChangeDetectionStrategy, Component, output, viewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  NgForm,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAX_X, MAX_Y, Point } from '@shared/models/Points';

export interface PointForm {
  name: FormControl<string | null>;
  xPoint: FormControl<number | null>;
  yPoint: FormControl<number | null>;
}

@Component({
  selector: 'app-new-point',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './new-point.component.html',
  styleUrl: './new-point.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class NewPointComponent {
  pointFormRef = viewChild<NgForm>('pointFormRef');
  newPoint = output<Point>();
  MAX_X = MAX_X;
  MAX_Y = MAX_Y;


  pointForm = new FormGroup<PointForm>({
    name: new FormControl<string | null>(null, [Validators.required]),
    xPoint: new FormControl<number | null>(null, [Validators.required,  Validators.max(MAX_X), Validators.min(0)]),
    yPoint: new FormControl<number | null>(null, [Validators.required, Validators.max(MAX_Y), Validators.min(0)]),
  });

  onSubmit() {
    if (this.pointForm.valid) {
      this.newPoint.emit({
        name: this.pointForm.value.name ?? '',
        xPoint: this.pointForm.value.xPoint ?? 0,
        yPoint: this.pointForm.value.yPoint ?? 0,
      });
      this.pointForm.reset();
      this.pointFormRef()?.resetForm();
    }
  }
}
