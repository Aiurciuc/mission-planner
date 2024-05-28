import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IndexedPoint } from '@shared/models/Points';

@Component({
  selector: 'app-robot',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './robot.component.html',
  styleUrl: './robot.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RobotComponent {
  point = input.required<IndexedPoint>();
  areaWidthRatio = input.required<number>();
  areaHeightRatio = input.required<number>();
  top = input.required<number>();
  xOffset = input<number>(0);
  yOffset = input<number>(-24);

}
