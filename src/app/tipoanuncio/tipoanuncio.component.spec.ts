import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoanuncioComponent } from './tipoanuncio.component';

describe('TipoanuncioComponent', () => {
  let component: TipoanuncioComponent;
  let fixture: ComponentFixture<TipoanuncioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoanuncioComponent]
    });
    fixture = TestBed.createComponent(TipoanuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
