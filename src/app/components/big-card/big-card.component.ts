import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
  
})
export class BigCardComponent implements OnInit {
  
  photoCover:string = "https://i.pinimg.com/736x/9b/dd/3f/9bdd3f6d463d10c0217ef7c512fb87c8.jpg"
  cardTitle:string = "Minha primeira experiência com um projeto usando Angular!"
  cardDescription:string = "Se você está começando com Angular e se sentiu um pouco perdido no começo (como eu) esse post é pra você!"
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {

  }
}
