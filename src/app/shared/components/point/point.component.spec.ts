import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointComponent } from './point.component';
import { By } from '@angular/platform-browser';

describe('PointComponent', () => {
  let component: PointComponent;
  let fixture: ComponentFixture<PointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('point',{
      id:1,
      name: 'mock',
      xPoint: 1,
      yPoint: 1
    });

    fixture.componentRef.setInput('areaWidthRatio', 10)
    fixture.componentRef.setInput('areaHeightRatio', 10)
    fixture.componentRef.setInput('top', 10)
    fixture.componentRef.setInput('left', 10)

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate correct style.top and style.left', () => {
    expect(component).toBeTruthy();
    const point = fixture.debugElement.query(By.css('.point'));
    expect(point.nativeElement.getAttribute('style')).toEqual('top: 10.1px; left: 10.1px;')
  });
});
