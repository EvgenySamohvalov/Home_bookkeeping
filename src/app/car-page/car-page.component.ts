import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  id: string;
  name: string;
  year: string;
  color: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.year = this.route.snapshot.queryParams['year'];
    this.color = this.route.snapshot.queryParams['color'];

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
    });
    // Это стрим, на который мы можем подписаться
  }

}
