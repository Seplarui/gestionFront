import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';
import { DataApiService } from 'src/app/services/data-api.service';
import { defer } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;
  let dataServiceSpyObj: jasmine.SpyObj<DataApiService>

  beforeEach(async(() => {
    const dataServiceSpy = jasmine.createSpyObj('DataApiService', ['getHelloWorld']);

    TestBed.configureTestingModule({
      declarations: [HelloWorldComponent],
      providers: [
        { provide: DataApiService, useValue: dataServiceSpy }
      ]
    })
      .compileComponents();

    dataServiceSpyObj = TestBed.get(DataApiService);
  }));

  beforeEach(() => {
    dataServiceSpyObj.getHelloWorld.and.returnValue(asyncData("hello"));
    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show the response from DataApiService.getHelloWork()', ()=> {
    fixture.whenRenderingDone().then(() => {
      fixture.detectChanges();
      const paragraph = fixture.debugElement.query(By.css('[data-test-id="apiResult"'));
      expect(paragraph.nativeElement.innerText).toEqual("hello");
    });
  })

  function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }
});
