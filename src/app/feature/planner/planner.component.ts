import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss'
})
export class PlannerComponent {
  activatedRoute = inject(ActivatedRoute);
  title = this.activatedRoute.snapshot.title || '';
}
