import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [],
  templateUrl: './area.component.html',
  styleUrl: './area.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaComponent {

}
