import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AschaComponent } from './ascha.component';

describe('AschaComponent', () => {
  let component: AschaComponent;
  let fixture: ComponentFixture<AschaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AschaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AschaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
