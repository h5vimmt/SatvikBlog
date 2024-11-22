import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>English Grammer Basic</h1>

      <router-outlet />
  `,
})
export default class BlogPage {} 