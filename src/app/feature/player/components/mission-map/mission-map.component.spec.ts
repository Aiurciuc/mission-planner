import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionMapComponent } from './mission-map.component';

describe('MissionMapComponent', () => {
  let component: MissionMapComponent;
  let fixture: ComponentFixture<MissionMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionMapComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('points',[{
      id:1,
      name: 'mock',
      xPoint: 1,
      yPoint: 1
    }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onPause', () => {
    it('should set play to false and clearInterval', () => {
      component.interval = 1;
      component.onPause();
      fixture.detectChanges();
      expect(component.play()).toBeFalse();
      expect(component.interval).toBeNull()
    })
  })

  describe('onPlay', () => {
    it('should set play to true and setInterval', () => {
      const spy = spyOn(component, 'startInterval')
      component.onPlay();
      fixture.detectChanges();
      expect(component.play()).toBeTrue();
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('startInterval', () => {
    it('should set play to true and setInterval', () => {
      const spy = spyOn(component, 'startInterval')
      component.onPlay();
      fixture.detectChanges();
      expect(component.play()).toBeTrue();
      expect(spy).toHaveBeenCalled()
    })
  })
});
