import { Component, Input, OnInit } from '@angular/core';
interface Item {
  index: number,
  value: string
}

@Component({
  selector: 'hello-child',
  templateUrl: './hello-child.component.html',
  styleUrls: ['./hello-child.component.scss']
})
export class HelloChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() item!: Item;
  @Input("name") parentName = '';
}
