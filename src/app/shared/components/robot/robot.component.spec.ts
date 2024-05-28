import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotComponent } from './robot.component';
import { By } from '@angular/platform-browser';

describe('RobotComponent', () => {
  let component: RobotComponent;
  let fixture: ComponentFixture<RobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RobotComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('point', {
      id: 1,
      name: 'mock',
      xPoint: 1,
      yPoint: 1,
    });

    fixture.componentRef.setInput('areaWidthRatio', 10);
    fixture.componentRef.setInput('areaHeightRatio', 10);
    fixture.componentRef.setInput('top', 10);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate correct style.top and style.left', () => {
    expect(component).toBeTruthy();
    const robot = fixture.debugElement.query(By.css('.robot'));
    expect(robot.nativeElement.getAttribute('style')).toEqual(
      'top: -13.9px; left: 6.1px;'
    );
  });
});
