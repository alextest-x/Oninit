import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: [
  ]
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{


    //recibo con el input del componente padre
    @Input()
    public price: number = 0;



    //en el constructor no hacer peticiones http
    //constructor(){}

   // $hace refreencia que es un observable
   //sale error porque se tiene que inicializar en el constructor pero en el constructor por ahora entonces
   //ponemos el sigo ? que significa opcional
   public intervarl$?: Subscription;

    //mantener una subcripcion con websokets
    //inicializar componentes
    //primera peticion http, hacer los subscribers, los websockers, o los timers
  ngOnInit(): void {
    console.log('componente hijo: ngOnInit');

    //emite los valores cada vez 1,2,3,4 ...etc
    //con este metodo se ejecuta el ngDoCheck, ngAfterContestChecked, ngAfterViewChecked
    //porque el componente hijo tambien emite valores al padre
    //interval(1000).subscribe( value => console.log(`tick: ${value}`));

    //lo ponemos en this.intervarl$ y lo enviamos al metodo ngOnDestroy
    this.intervarl$ = interval(1000).subscribe( value => console.log(`tick: ${value}`));
  }

 //es para estar pendientes de los cambios de las propiedades de los inputs
  ngOnChanges(changes: SimpleChanges): void {
    console.log('componente hijo: ngOnChanges');
    console.log({changes});
  }


  ngOnDestroy(): void {
    console.log('componente hijo: ngOnDestroy');
    //el unsubscribe cancela la subcripcion del observador
    this.intervarl$?.unsubscribe();
  }






}
