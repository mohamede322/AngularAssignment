import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './404.component.html',
  styleUrl: './404.component.css',
})
export class NotFoundComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('PageNotFound');
  }
}
