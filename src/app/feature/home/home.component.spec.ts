import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HomeComponent]
      }).compileComponents();
  
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have title Mission Planner', () => {
      const title = fixture.debugElement.query(By.css('h1'));
      expect(title.nativeElement.textContent).toBe('Mission Planner');
    });

    it('should have the correct git clone command', () => {
      const title = fixture.debugElement.query(By.css('[ariaLabel="Copy git clone command"]'));
      expect(title.nativeElement.getAttribute('command')).toBe('git clone https://github.com/Aiurciuc/mission-planner.git')

    });

    it('should have the correct npm install command', () => {
      const title = fixture.debugElement.query(By.css('[ariaLabel="Copy install packages command"]'));
      expect(title.nativeElement.getAttribute('command')).toBe('npm install')

    });

    it('should have the correct npm serve command', () => {
      const title = fixture.debugElement.query(By.css('[ariaLabel="Copy app start command"]'));
      expect(title.nativeElement.getAttribute('command')).toBe('npm serve')

    });

    it('should have the correct build command', () => {
      const title = fixture.debugElement.query(By.css('[ariaLabel="Build the app"]'));
      expect(title.nativeElement.getAttribute('command')).toBe('npm run build')

    });

    it('should have the correct test command', () => {
      const title = fixture.debugElement.query(By.css('[ariaLabel="Test the app"]'));
      expect(title.nativeElement.getAttribute('command')).toBe('npm test')

    });




});
