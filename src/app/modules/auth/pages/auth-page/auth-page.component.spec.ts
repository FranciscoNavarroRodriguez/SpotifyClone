import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';


import { AuthPageComponent } from './auth-page.component';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPageComponent ],
      imports: [HttpClientTestingModule,  RouterTestingModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  //TODO Primera prueba

  it('Deberia retornar invalido el cuestionario', () => {
    //Metodo de testing AAA (Arrange, Act, Assert)

    //1.Arrange:

    const mockCredentials = {
      email: '0x0x0x0x0x',
      password: '1111111111111111111'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //2.Act

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //3.Assert

    expect(component.formLogin.invalid).toBeTruthy();

  });

  it('Comprobar string del elemento Button', () => {

    const elemenRef = fixture.debugElement.query(By.css('.form-action button'));
    const getInnerText = elemenRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión');

  });



});
