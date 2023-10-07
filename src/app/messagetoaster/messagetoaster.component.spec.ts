import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagetoasterComponent } from './messagetoaster.component';

describe('MessagetoasterComponent', () => {
  let component: MessagetoasterComponent;
  let fixture: ComponentFixture<MessagetoasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagetoasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagetoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
