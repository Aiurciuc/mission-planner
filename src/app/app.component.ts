import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import {  filter, of, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@core/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public activatedRoute = inject(ActivatedRoute);
  public router = inject(Router);

  title =this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    switchMap(() =>
      this.activatedRoute?.firstChild?.title ?? of('')
       
    )
   
  )

}
