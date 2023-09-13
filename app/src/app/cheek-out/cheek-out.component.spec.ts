import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheekOutComponent } from './cheek-out.component';

describe('CheekOutComponent', () => {
  let component: CheekOutComponent;
  let fixture: ComponentFixture<CheekOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheekOutComponent]
    });
    fixture = TestBed.createComponent(CheekOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
