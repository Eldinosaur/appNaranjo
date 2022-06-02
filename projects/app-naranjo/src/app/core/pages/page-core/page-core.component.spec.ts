import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCoreComponent } from './page-core.component';

describe('PageCoreComponent', () => {
  let component: PageCoreComponent;
  let fixture: ComponentFixture<PageCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
