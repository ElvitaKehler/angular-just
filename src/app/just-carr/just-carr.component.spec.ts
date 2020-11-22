import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustCarrComponent } from './just-carr.component';

describe('JustCarrComponent', () => {
  let component: JustCarrComponent;
  let fixture: ComponentFixture<JustCarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustCarrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustCarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
