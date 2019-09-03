import { Component } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class HelloWorldComponent {
  cadena: string;

  constructor(private dataApi: DataApiService) {
    this.dataApi.getHelloWorld().subscribe((response: any) => {
      this.cadena = response;
    })
  }

}
