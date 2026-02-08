import {
  Component, OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-component-life-cycle',
  imports: [],
  templateUrl: './component-life-cycle.html',
  styleUrl: './component-life-cycle.css',
})
export class ComponentLifeCycle implements OnInit,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {


constructor() {
    console.log('1. Constructor -Initialize class variables');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges - Respond to input property changes ', changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit - Component initialization');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck - Detect changes');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit - After content initialization');
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked - After content checked');
  }

  ngAfterViewInit() {
    console.log('7. ngAfterViewInit - After view initialization-Finally called once all child views are finished and the parent\'s view is complete');
  }

  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked - After view checked');
  }

  ngOnDestroy() {
    console.log('9. ngOnDestroy - Cleanup before destroyed');
  }




}
