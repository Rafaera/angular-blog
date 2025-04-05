import { Component, OnInit } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://i.pinimg.com/736x/02/40/e0/0240e0cfa0f95c73c8710459e4d027a4.jpg"
  contentTitle:string = "Minha primeira experiência com um projeto usando Angular!"
  contentDescription:string = "Angular parece complicado no começo, mas com paciência e prática tudo começa a fazer sentido. Esse projeto é só o começo da minha jornada com front-end e já estou animada para o que vem por aí!"

  private id:string | null = "0"
  
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("Id")
    )
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(
                        article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover


  }
}
