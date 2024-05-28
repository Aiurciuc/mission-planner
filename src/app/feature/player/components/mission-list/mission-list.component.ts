import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IndexedPoint, MISSION_COLUMNS } from '@shared/models/Points';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionListComponent {
  points = input.required<IndexedPoint[]>();

  MISSION_COLUMNS = MISSION_COLUMNS;
}
