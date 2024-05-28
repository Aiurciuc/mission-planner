import { AfterViewInit, Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { AreaComponent } from '@shared/components/area/area.component';
import { PointComponent } from '@shared/components/point/point.component';
import { IndexedPoint, MAX_X, MAX_Y } from '@shared/models/Points';

@Component({
  selector: 'app-mission-map',
  standalone: true,
  imports: [PointComponent, AreaComponent],
  templateUrl: './mission-map.component.html',
  styleUrl: './mission-map.component.scss'
})
export class MissionMapComponent implements AfterViewInit {
  points = input.required<IndexedPoint[]>();
  area = viewChild.required('area', { read: ElementRef });
  
  areaWidthRatio = signal(1);
  areaHeightRatio = signal(1);
  
  ngAfterViewInit(): void {
    const boundaries = this.area().nativeElement.getBoundingClientRect();
    this.areaWidthRatio.set(MAX_X/boundaries.width );
    this.areaHeightRatio.set(MAX_Y/boundaries.height);
  }
}
