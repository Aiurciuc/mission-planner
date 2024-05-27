import { Component, input } from '@angular/core';
import { IndexedPoint } from '@shared/models/Points';

@Component({
  selector: 'app-point',
  standalone: true,
  imports: [],
  templateUrl: './point.component.html',
  styleUrl: './point.component.scss'
})
export class PointComponent {
  point = input.required<IndexedPoint>();

  

}
