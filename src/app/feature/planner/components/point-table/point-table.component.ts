import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { IndexedPoint, POINTS_COLUMNS } from '@shared/models/Points';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointTableComponent {
  points = input.required<IndexedPoint[]>()
  removePoint = output<IndexedPoint>()

  displayedColumns: string[] = POINTS_COLUMNS;

  delete(point : IndexedPoint) {
    this.removePoint.emit(point);
  }

}
