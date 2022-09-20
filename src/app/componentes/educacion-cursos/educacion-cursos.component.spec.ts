import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionCursosComponent } from './educacion-cursos.component';

describe('EducacionCursosComponent', () => {
  let component: EducacionCursosComponent;
  let fixture: ComponentFixture<EducacionCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
