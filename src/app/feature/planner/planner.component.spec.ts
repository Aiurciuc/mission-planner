import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerComponent } from './planner.component';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PointsService } from '@shared/services/points.service';
import { signal } from '@angular/core';

describe('PlannerComponent', () => {
  let component: PlannerComponent;
  let fixture: ComponentFixture<PlannerComponent>;

  const pointsServiceSpy = jasmine.createSpyObj('PointsService', [
    'addPoint',
    'removePoint',
  ], {
    points: signal([])
  });;

  describe('when title is present', () => {
    beforeEach(async () => {

      await TestBed.configureTestingModule({
        imports: [PlannerComponent, NoopAnimationsModule],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                title: 'Title',
              },
            },
          },
          {
            provide: PointsService,
            useValue: pointsServiceSpy,
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(PlannerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have a title with the value from activatedRoute snapshot title', () => {
      const title = fixture.debugElement.query(By.css('h1'));
      expect(title.nativeElement.textContent).toBe('Title');
    });

    
    it('should call addPoint on onAddNewPoint call', () => {
      const point = {
        name: 'mock',
        xPoint: 1,
        yPoint: 1
      }
      component.onAddNewPoint(point)
      fixture.detectChanges();
      expect(component.pointsService.addPoint).toHaveBeenCalledWith(point);
    });

    it('should call removePoint on onRemovePoint call', () => {
      const point = {
        id: 1,
        name: 'mock',
        xPoint: 1,
        yPoint: 1
      }
      component.onRemovePoint(point)
      fixture.detectChanges();
      expect(component.pointsService.removePoint).toHaveBeenCalledWith(point);
    });
  });

  describe('when title is not present', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [PlannerComponent, NoopAnimationsModule],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                title: '',
              },
            },
          },
          {
            provide: PointsService,
            useValue: pointsServiceSpy,
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(PlannerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should have a title with empty string if value from activatedRoute is undefined', () => {
      const title = fixture.debugElement.query(By.css('h1'));

      expect(title.nativeElement.textContent).toBe('');
    });
  });
});
