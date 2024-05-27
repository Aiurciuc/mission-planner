import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';
import { By } from '@angular/platform-browser';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img tag with correct attributes', () => {
    const img = fixture.debugElement.query(By.css('img'));
    expect(img.nativeElement.getAttribute('src')).toBe('/assets/anybotics-logo.jpg');
    expect(img.nativeElement.getAttribute('alt')).toBe('anybotics-logo');

  });
});
