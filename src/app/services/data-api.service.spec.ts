import { TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http'

import { DataApiService } from './data-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('DataApiService', () => {

  let httpTestingController: HttpTestingController;
  let service: DataApiService;

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
    ],
    providers: [
      DataApiService
    ],
    imports: [
      HttpClientTestingModule,
      HttpClientModule
    ]
    
  }));


  //httpTestingController = TestBed.get(httpTestingController);
  //service = TestBed.get(DataApiService);
  

  it('should be created', () => {
    let service: DataApiService = TestBed.get(DataApiService);
    expect(service).toBeTruthy();
    console.log("service: "+service.getHelloWorld);
  });

  //PRUEBAS


  it('getHelloWorld', () => {
    //httpTestingController = TestBed.get(httpTestingController);
    service = TestBed.get(DataApiService);
    console.log("service: "+service.getHelloWorld);
    service.getHelloWorld().subscribe(holaMundo => {
      expect(holaMundo).toEqual('Hola Mundo');
    })
  })


});

