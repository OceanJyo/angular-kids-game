import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { Points24Component } from './points-24.component';

describe('Points24Component', () => {
  let component: Points24Component;
  let fixture: ComponentFixture<Points24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Points24Component],
      providers: [HttpClient]

    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Points24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
