import { NgStyle } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.css'
})
export class JumbotronComponent {
}
