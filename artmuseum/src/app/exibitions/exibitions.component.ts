import { Component, OnInit } from '@angular/core';
import { Exibition } from '../modal/exibition.model';
import { ExibitionsService } from '../service/exibitions.service';

@Component({
  selector: 'app-exibitions',
  templateUrl: './exibitions.component.html',
  styleUrls: ['./exibitions.component.css']
})
export class ExibitionsComponent implements OnInit {
  exibitions: Exibition [] = []
  constructor(private service: ExibitionsService) { }

  ngOnInit(): void {
    this.service.getExibition().subscribe({
      next: (exibition: Exibition[]) => {
        this.exibitions = exibition
      },
      error: (err: any) => console.log(err)
    })
  }

}
