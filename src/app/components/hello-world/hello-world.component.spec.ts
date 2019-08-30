import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HelloWorldComponent } from './hello-world.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { DataApiService } from 'src/app/services/data-api.service';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelloWorldComponent],
      providers: [
        DataApiService
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('api', ()=> {
    const fixture = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled);
    expect(compiled.querySelector('p').textContent).toContain('');
  })
});
