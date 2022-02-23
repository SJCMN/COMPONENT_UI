import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data: Array<object> = [
    { name: 'James', age: 34, job: 'Chump', employed: true },
    { name: 'Jeremiah', age: 44, job: 'Dir of Chumps', employed: true },
    { name: 'Luis', age: 25, job: 'Design Chump', employed: true },
    { name: 'Drew', age: 24, job: 'Design Chump', employed: false }
  ];

  headers: Array<object> = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Employed' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
