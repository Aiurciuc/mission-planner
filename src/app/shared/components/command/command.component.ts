import { ClipboardModule } from '@angular/cdk/clipboard';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-command',
  standalone: true,
  imports: [MatButtonModule, ClipboardModule, MatIcon],
  templateUrl: './command.component.html',
  styleUrl: './command.component.scss',
})
export class CommandComponent {
  command = input.required<string>();
  ariaLabel = input<string>();
}
