import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkpoint-status-children-list',
  templateUrl: './checkpoint-status-children-list.component.html'
})
export class CheckpointStatusChildrenListComponent implements OnInit {
  @Input() children;

  constructor() { }

  ngOnInit() { }
}
