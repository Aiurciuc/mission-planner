import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let activatedRouteSpy: ActivatedRoute;
  let routerSpy: Router;

  beforeEach(async () => {
    activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], {
      firstChild: {
        title: of('Title')
      }
    });

    routerSpy = jasmine.createSpyObj('Router', [], {
      events: new Observable(observer => {
        observer.next(
          new NavigationEnd(0, 'http://localhost:4200', 'http://localhost:4200')
        );
        observer.complete();
      })
    });

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: Router, useValue: routerSpy},
        { provide: ActivatedRoute, useValue: activatedRouteSpy}
      ]
    })

    

  });
  
  it('should create the app', () => {
    TestBed.overrideProvider( ActivatedRoute, { useValue: activatedRouteSpy})
    TestBed.compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have title an Observable that contains the title from activatedRoute', () => {
    TestBed.overrideProvider( ActivatedRoute, { useValue: activatedRouteSpy})
    TestBed.compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.title.subscribe(title => {
      expect(title).toBe('Title');
      
    })
  });

  it('should have title an Observable of an empty string from title from activatedRoute is undefined', () => {
    
    activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], {
      firstChild: undefined
    });

    TestBed.overrideProvider( ActivatedRoute, { useValue: activatedRouteSpy})
    TestBed.compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    
    component.title.subscribe(title => {
      expect(title).toEqual('');
      
    })
  });
});
