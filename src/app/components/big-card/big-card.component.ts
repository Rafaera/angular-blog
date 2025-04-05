import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
  
})
export class BigCardComponent implements OnInit {
  
  photoCover:string = "https://i.pinimg.com/736x/9b/dd/3f/9bdd3f6d463d10c0217ef7c512fb87c8.jpg"
  cardTitle:string = "Minha primeira experiência com um projeto usando Angular!"
  cardDescription:string = "Se você está começando com Angular e se sentiu um pouco perdido no começo (como eu) esse post é pra você!"

  constructor() { }

  ngOnInit(): void {

  }
}
