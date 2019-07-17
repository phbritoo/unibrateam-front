import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashChartComponent } from './my-dash-chart.component';

describe('MyDashChartComponent', () => {
  let component: MyDashChartComponent;
  let fixture: ComponentFixture<MyDashChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDashChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDashChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
