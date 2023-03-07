import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarEquipComponent } from './entrar-equip.component';

describe('EntrarEquipComponent', () => {
  let component: EntrarEquipComponent;
  let fixture: ComponentFixture<EntrarEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarEquipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrarEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
