import {
  Component,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { MissionMapComponent } from './components/mission-map/mission-map.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [LayoutComponent, MissionMapComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  
  activatedRoute = inject(ActivatedRoute);
  title = this.activatedRoute.snapshot.title || '';
  


  points = [{
    id: 1,
    name: 'name',
    xPoint: 600,
    yPoint: 200,
  },
  {
    id: 3,
    name: 'name',
    xPoint: 1000,
    yPoint: 1000,
  },
  {
    id: 2,
    name: 'name',
    xPoint: 1500,
    yPoint: 800,
  },
  {
    id: 4,
    name: 'name',
    xPoint: 500,
    yPoint: 700,
  },{
    id: 5,
    name: 'name',
    xPoint: 400,
    yPoint: 400,
  }
];
}
