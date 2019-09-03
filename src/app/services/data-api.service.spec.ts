import { TestBed } from '@angular/core/testing';
import { DataApiService } from './data-api.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';


describe('DataApiService', () => {
  let dataApiService: DataApiService;
  let httpClientSpyObj: jasmine.SpyObj<HttpClient>

  beforeEach(()  => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        DataApiService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });

    dataApiService = TestBed.get(DataApiService);
    httpClientSpyObj = TestBed.get(HttpClient);
  });


  it('should be created', () => {
    expect(dataApiService).toBeTruthy();
  });

  it('getHelloWorld() should return hello world', () => {
    httpClientSpyObj.get.and.returnValue(asyncData("hello"));
    dataApiService.getHelloWorld().subscribe((res: string) => {
      expect(res).toBe("hello");
    });
  });

  function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }

});

