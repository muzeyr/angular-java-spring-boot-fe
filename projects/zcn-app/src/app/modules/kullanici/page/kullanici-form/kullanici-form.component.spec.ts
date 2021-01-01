import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciFormComponent } from './kullanici-form.component';

describe('KullaniciFormComponent', () => {
  let component: KullaniciFormComponent;
  let fixture: ComponentFixture<KullaniciFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaniciFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
