import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTableComponent } from './point-table.component';

describe('PointTableComponent', () => {
  let component: PointTableComponent;
  let fixture: ComponentFixture<PointTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointTableComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('points',[]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call emit on delete', () => {
    const spy = spyOn(component.removePoint, 'emit')
    const point = {
      id:1,
      name: 'mock',
      xPoint: 1,
      yPoint: 1
    }
    component.delete(point);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(point)
  });
});
