import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandComponent } from './command.component';
import { By } from '@angular/platform-browser';

describe('CommandComponent', () => {
  let component: CommandComponent;
  let fixture: ComponentFixture<CommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommandComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('command', 'Command');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the command inside code tag', () => {
    const code = fixture.debugElement.query(By.css('code'));
    expect(code.nativeElement.textContent).toBe('Command')
  });

  it('should have ariaLabel set to ariaLabel attribute', () => {
    fixture.componentRef.setInput('ariaLabel', 'MockAria');
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.getAttribute('aria-label')).toBe('MockAria')
  });

});
