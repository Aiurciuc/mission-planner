import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IndexedPoint } from '@shared/models/Points';

@Component({
  selector: 'app-point',
  standalone: true,
  imports: [],
  templateUrl: './point.component.html',
  styleUrl: './point.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointComponent {
  point = input.required<IndexedPoint>();
  areaWidthRatio = input.required<number>();
  areaHeightRatio = input.required<number>();
  top = input.required<number>();
  left = input.required<number>();

}
