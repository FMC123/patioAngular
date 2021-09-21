import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-access-motive-children-list',
  templateUrl: './access-motive-children-list.component.html'
})
export class AccessMotiveChildrenListComponent implements OnInit {
  @Input() children;

  constructor() { }

  ngOnInit() { }
}
