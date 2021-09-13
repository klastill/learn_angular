import { Component, OnInit } from '@angular/core';

interface Item {
  index: number,
  value: string
}

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  name: string = 'unknown';
  isShow: boolean = true;
  items: Item[] = [
    {
      index: 1,
      value: "First"
    },
    {
      index: 2,
      value: "Second"
    },
    {
      index: 3,
      value: "Third"
    },
    {
      index: 4,
      value: "Fourth"
    }
  ];

  setName(name: string) {
    this.name = name;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
