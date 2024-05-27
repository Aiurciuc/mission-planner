import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '@shared/components/logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatMenuHarness } from '@angular/material/menu/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        RouterModule.forRoot([]),
        LogoComponent,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a routerLink to /home on the logo', () => {
    const logo = fixture.debugElement.query(By.css('.logo'));
    expect(logo.nativeElement.getAttribute('routerLink')).toEqual('/home');
  });

  it('should have a link to the repo on the share button', () => {
    const share = fixture.debugElement.query(By.css('[aria-label="Share"]'));
    expect(share.nativeElement.getAttribute('href')).toEqual(
      'https://github.com/Aiurciuc/mission-planner'
    );
  });

  it('should have the correct title displayed', () => {
    const title = fixture.debugElement.query(By.css('h1'));
    expect(title.nativeElement.textContent).toBe('Title');
  });

  describe('menu', () => {
    it('should have a a routerLink to /home on the corresponding menu item', async () => {
      const menu = await loader.getHarness(MatMenuHarness);
      await menu.open();
      const items = await menu.getItems({ selector: '[aria-label="Home"]' });

      const host = await items[0].host();
      console.log(host);
      const link = await host.getAttribute('routerLink');

      expect(link).toBe('/home');
    });

    it('should have a a routerLink to /planner on the corresponding menu item', async () => {
      const menu = await loader.getHarness(MatMenuHarness);
      await menu.open();
      const items = await menu.getItems({ selector: '[aria-label="Planner"]' });

      const host = await items[0].host();
      console.log(host);
      const link = await host.getAttribute('routerLink');

      expect(link).toBe('/planner');
    });
    it('should have a a routerLink to /player on the corresponding menu item', async () => {
      const menu = await loader.getHarness(MatMenuHarness);
      await menu.open();
      const items = await menu.getItems({ selector: '[aria-label="Player"]' });

      const host = await items[0].host();
      console.log(host);
      const link = await host.getAttribute('routerLink');

      expect(link).toBe('/player');
    });
  });
});
