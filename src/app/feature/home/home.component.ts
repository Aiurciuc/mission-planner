import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommandComponent } from '@shared/components/command/command.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ LayoutComponent, CommandComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
