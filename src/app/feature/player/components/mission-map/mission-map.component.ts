import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AreaComponent } from '@shared/components/area/area.component';
import { PointComponent } from '@shared/components/point/point.component';
import { RobotComponent } from '@shared/components/robot/robot.component';
import { IndexedPoint, MAX_X, MAX_Y } from '@shared/models/Points';

@Component({
  selector: 'app-mission-map',
  standalone: true,
  imports: [
    PointComponent,
    AreaComponent,
    RobotComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './mission-map.component.html',
  styleUrl: './mission-map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionMapComponent implements AfterViewInit, OnDestroy {
  points = input.required<IndexedPoint[]>();
  area = viewChild.required('area', { read: ElementRef });

  areaWidthRatio = signal(1);
  areaHeightRatio = signal(1);
  left = signal(0);
  top = signal(0);
  play = signal(false);

  robotPoint = signal<IndexedPoint | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interval: any = null;

  ngAfterViewInit(): void {
    const boundaries = this.area().nativeElement.getBoundingClientRect();
    this.areaWidthRatio.set(MAX_X / boundaries.width);
    this.areaHeightRatio.set(MAX_Y /boundaries.height);
    this.top.set(this.area().nativeElement.offsetTop - 12);
    this.left.set(this.area().nativeElement.offsetLeft - 12);

  }

  ngOnDestroy(): void {
    this.#clearInterval();
  }

  onPause() {
    this.#clearInterval();
    this.play.set(false);
  }

  startInterval() {
    if (!this.interval) {
      let index = 0;
      this.interval = setInterval(() => {
        if (index > this.points().length - 1) {
          this.play.set(false);
          this.#clearInterval();
        } else {
          this.robotPoint.update(() => this.points()[index]);
          index++;
        }
      }, 1000);
    }
  }

  onPlay() {
    this.play.set(true);
    this.startInterval();
  }

  #clearInterval() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
