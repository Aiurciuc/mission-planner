import {
  Component,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { MissionMapComponent } from './components/mission-map/mission-map.component';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { PointsService } from '@shared/services/points.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [LayoutComponent, MissionMapComponent, MissionListComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  
  activatedRoute = inject(ActivatedRoute);
  pointsService= inject(PointsService);

  points= this.pointsService.points()

  title = this.activatedRoute.snapshot.title || '';
}
