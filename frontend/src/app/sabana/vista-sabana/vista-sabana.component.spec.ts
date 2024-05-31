import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSabanaComponent } from './vista-sabana.component';

describe('VistaSabanaComponent', () => {
  let component: VistaSabanaComponent;
  let fixture: ComponentFixture<VistaSabanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaSabanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaSabanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
