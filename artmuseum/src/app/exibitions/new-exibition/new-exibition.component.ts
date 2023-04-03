import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Exibition, ExibitionLocation } from 'src/app/modal/exibition.model';
import { ExibitionsService } from 'src/app/service/exibitions.service';

@Component({
  selector: 'app-new-exibition',
  templateUrl: './new-exibition.component.html',
  styleUrls: ['./new-exibition.component.css']
})
export class NewExibitionComponent implements OnInit {
  locations: ExibitionLocation[] = [];
  exibitionForm = new FormGroup({
    title: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    location: new FormControl("", Validators.required)
  })
  constructor(private service: ExibitionsService, private router: Router) { }

  ngOnInit(): void {
    this.service.getLocations().subscribe({
      next: (locations: ExibitionLocation[]) => { this.locations = locations },
      error: (err) => {console.log(err)}
    })
  }

  onSubmit(): void {

    let location = new ExibitionLocation();
    for (let loc of this.locations) {
      if (loc._id == this.exibitionForm.value.location) {
        location = loc;
      }
    }

    let newExibition = new Exibition();
    newExibition.title = this.exibitionForm.value.title || ""
    newExibition.description = this.exibitionForm.value.description || ""
    newExibition.location = location

    console.log(newExibition);

    this.service.createExibition(newExibition).subscribe({
      next: (exibition: Exibition) => { 
        console.log(exibition) 
        this.router.navigate(["/exibitions"])
      },
      error: (err) => {console.log(err)}
    })
}

}
