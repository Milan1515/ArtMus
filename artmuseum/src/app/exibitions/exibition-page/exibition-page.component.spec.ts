import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibitionPageComponent } from './exibition-page.component';

describe('ExibitionPageComponent', () => {
  let component: ExibitionPageComponent;
  let fixture: ComponentFixture<ExibitionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibitionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
