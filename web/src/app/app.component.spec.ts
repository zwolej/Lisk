import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './services/AuthService';

declare var particlesJS: any;

describe('AppComponent', () => {

  beforeEach(async(() => {
    const authServiceSpy = new AuthService();
    spyOn(authServiceSpy, 'isLogged').and.returnValue(true);

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: 'particlesJS', useValue: {} // not working provider
        },
        {
          provide: AuthService, useValue: authServiceSpy
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
