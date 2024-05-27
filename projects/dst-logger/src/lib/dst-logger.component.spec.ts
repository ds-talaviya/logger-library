import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DstLoggerComponent } from './dst-logger.component';

describe('DstLoggerComponent', () => {
  let component: DstLoggerComponent;
  let fixture: ComponentFixture<DstLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DstLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DstLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
