import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styles: [
  ]
})


export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{


  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor(){
    console.log('constructor');
    }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  //valida un cambio que envia a un componente hijo
  //si el componente no implemneta ningun input no muestra el ngOnChanges

  //es para estar pendientes de los cambios de las propiedades de los inputs
  ngOnChanges(changes: SimpleChanges): void {
    console.log( { changes } );
    console.log('ngOnChanges');
  }

  //se usan para graficas o plugins para calcular la dimension de la pantalla
  //cuando se modifica
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  //se usan para graficas o plugins
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  //se usan para graficas o plugins
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  //se usan para graficas o plugins
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  //se usan para graficas o plugins
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }


  //se limpia cuando en el OnInit inicializado o creado un listener o observable, o un timer
  //o proceso que se esta ejecutandose a lo largo de all el tiempo que este componente este en pantalla
  //limpia memoriano ejecute 2 veces los procesos
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }



  increasePrice(){
    this.currentPrice++;
  }



}

