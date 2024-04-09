import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public bool:boolean = true;

  public language(){
    console.log(this.bool);
    if (this.bool == true){
      this.bool = false;
    } else {
      this.bool = true;
    }
    
  }
}