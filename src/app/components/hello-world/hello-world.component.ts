import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private cadena: string;
  

  ngOnInit() {
    this.showHelloWorld();
  }

  showHelloWorld() {
    this.dataApi.getHelloWorld().subscribe((response:any)=> {
      this.cadena = response;
    })    
  }
}
