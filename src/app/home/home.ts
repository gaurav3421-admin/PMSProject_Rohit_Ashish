import { Component } from '@angular/core';
import { Footer} from '../footer/footer';
import { Menu} from '../menu/menu';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Footer, Menu, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
