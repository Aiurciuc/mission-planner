import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPointComponent } from './new-point.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NewPointComponent', () => {
  let component: NewPointComponent;
  let fixture: ComponentFixture<NewPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPointComponent,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should not call emit on newPoint if form is invalid', () => {
      const spy = spyOn(component.newPoint, 'emit')
      component.onSubmit();
      fixture.detectChanges();
      expect(spy).not.toHaveBeenCalled()
    });

    it('should not call emit on newPoint, reset and resetForm if form is valid', () => {
      component.pointForm.patchValue({
        name:'mock',
        xPoint: 0,
        yPoint: 0
      })
      fixture.detectChanges();
      
      const emitSpy = spyOn(component.newPoint, 'emit')
      const resetSpy = spyOn(component.pointForm, 'reset')
      const resetFormSpy = spyOn(component, 'pointFormRef')
      component.onSubmit();
      fixture.detectChanges();

      expect(emitSpy).toHaveBeenCalled();
      expect(resetSpy).toHaveBeenCalled();
      expect(resetFormSpy).toHaveBeenCalled();
      

    });

   
  })
});
