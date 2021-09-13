import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  name: string = 'unknown';

  setName(name: string) {
    this.name = name;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
