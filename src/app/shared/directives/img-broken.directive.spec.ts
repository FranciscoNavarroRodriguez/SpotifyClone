import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';


//Creamos un componente de prueba:
@Component({
  template: '<img appImgBroken class="testing-directive" [src]="srcMock" >'
})
class TestComponent{
  public srcMock: any = null
}


describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance
    fixture.detectChanges()

  })

  it('should create an instance', () => {
    const mockElement: ElementRef = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('TestComponent deberia instanciarse correctamente', () => {
    expect(component).toBeTruthy()
  })

  it('Directiva deberia cambiar imagen', (done: DoneFn) => {

    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeSrc = beforeImgElement.src //Obtenemos url antes de ser cambiada
    component.srcMock = undefined

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterSrc = afterImgElement.src

      expect(afterSrc).toEqual('https://i0.wp.com/seox.es/wp-content/uploads/2019/04/solucionar-error-wordpress-jpg-1.jpg')
      done()
    }, 3000);

  })


});
