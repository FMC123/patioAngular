import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-area-children-list',
  templateUrl: './area-children-list.component.html'
})
export class AreaChildrenListComponent implements OnInit {
  @Input() children;

  constructor() { }

  ngOnInit() { }
}
