import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerComponent } from './planner.component';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('PlannerComponent', () => {
  let component: PlannerComponent;
  let fixture: ComponentFixture<PlannerComponent>;

  describe('when title is present', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              title: 'Title',
            },
          },
        },
      ]
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
});
describe('when title is not present', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              title: '',
            },
          },
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
