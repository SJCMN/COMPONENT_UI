import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats: Array<object> = [
    { value: 22, label: '# of Users'},
    { value: 900, label: 'Revenue'},
    { value: 50, label: 'Reviews'}
  ];

  items: Array<object> = [
    { title: 'Green Sofa', description: 'Look at this green velvet!', url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
    { title: 'Leather Sofa', description: 'Love this camel color leather!', url: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y291Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
    { title: 'Chesterfield', description: 'OMG need a Chesterfield!!!', url: 'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvdWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
