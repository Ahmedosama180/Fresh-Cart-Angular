import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudactDetalisComponent } from './proudact-detalis.component';

describe('ProudactDetalisComponent', () => {
  let component: ProudactDetalisComponent;
  let fixture: ComponentFixture<ProudactDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProudactDetalisComponent]
    });
    fixture = TestBed.createComponent(ProudactDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
