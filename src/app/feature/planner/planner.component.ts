import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { NewPointComponent } from './components/new-point/new-point.component';
import { IndexedPoint, Point } from '@shared/models/Points';
import { PointTableComponent } from './components/point-table/point-table.component';
import { PointsService } from '@shared/services/points.service';


@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [
    LayoutComponent,
    NewPointComponent,
    PointTableComponent
  ],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',
})
export class PlannerComponent {
  activatedRoute = inject(ActivatedRoute);
  pointsService= inject(PointsService);

  title = this.activatedRoute.snapshot.title || '';
  points = this.pointsService.points;


  onAddNewPoint(point: Point) {
    this.pointsService.addPoint(point);
  }

  onRemovePoint(point: IndexedPoint) {
    this.pointsService.removePoint(point);
  }
}
