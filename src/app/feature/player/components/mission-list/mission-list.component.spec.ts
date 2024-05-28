import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionListComponent } from './mission-list.component';

describe('MissionListComponent', () => {
  let component: MissionListComponent;
  let fixture: ComponentFixture<MissionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionListComponent);
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
});
