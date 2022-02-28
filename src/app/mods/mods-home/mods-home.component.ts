import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;
  items: Array<any> = [
    { title: 'Where can you get the best pizza?', content: 'Obviously it comes from Dominoes'},
    { title: 'Why is the dog lying in the bed?', content: 'He is most comfortable in the other bed'},
    { title: 'Why time doe the kids get off the bus?', content: 'When the bus drives by the house and stops'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen
  }


}
