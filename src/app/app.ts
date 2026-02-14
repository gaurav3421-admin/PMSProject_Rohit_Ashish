import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from '../app/first-component/first-component';
import { ComponentLifeCycle } from '../app/component-life-cycle/component-life-cycle';
import { AngularDataBinding } from '../app/angular-data-binding/angular-data-binding';
import { Directive } from '../app/directive/directive';
import { Pipes } from '../app/pipes/pipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    //ComponentLifeCycle,
    //AngularDataBinding,
    //Directive
    Pipes
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PMS');
}
