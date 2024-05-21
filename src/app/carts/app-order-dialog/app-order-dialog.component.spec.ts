import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOrderDialogComponent } from './app-order-dialog.component';

describe('AppOrderDialogComponent', () => {
  let component: AppOrderDialogComponent;
  let fixture: ComponentFixture<AppOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppOrderDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
