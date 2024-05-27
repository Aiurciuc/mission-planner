import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';


@Component({
  selector: 'app-mock',
  standalone: true,
  imports: [LayoutComponent],
  template: `
  <app-layout>MOCK_TEXT</app-layout>
  `,
})
export class MockComponent {

}
describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent, MockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show projected content', () => {
    const testFixture = TestBed.createComponent(MockComponent);

    const mockFixture = testFixture.debugElement.query(
      By.css('app-layout')
    );

    expect(mockFixture.nativeElement.textContent).toEqual('MOCK_TEXT');
  });
});
