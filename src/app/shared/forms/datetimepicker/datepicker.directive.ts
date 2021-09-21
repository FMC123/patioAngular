import { Directive, OnInit, ElementRef, Optional, Host, SkipSelf, Input, OnDestroy } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Directive({
  selector: '[appDatePicker]'
})
export class DatePickerDirective implements OnInit, OnDestroy {

  @Input('formControlName') controlName;
  @Input() maxDateIsToday: boolean = false;//TODO: mudar no futuro pra aceitar qualquer data, mas não vejo uso pra isso agora
  @Input() minDateIsToday: boolean = false;//TODO: mudar no futuro pra aceitar qualquer data, mas não vejo uso pra isso agora

  constructor(private el: ElementRef,
              @Optional() @Host() @SkipSelf() private parent: ControlContainer) { }

  get control(){
    return (<any>this.parent.formDirective).control.controls[this.controlName];
  }

  ngOnInit() {
    let $el: any = jQuery(this.el.nativeElement).parent();
    $el.datetimepicker({
      locale: 'pt-br',
      format: 'L',
      tooltips: {
        today: 'Ir para Hoje',
        clear: 'Limpar seleção',
        close: 'Fechar',
        selectMonth: 'Selecionar Mês',
        prevMonth: 'Mês Anterior',
        nextMonth: 'Próximo Mês',
        selectYear: 'Selecionar Ano',
        prevYear: 'Ano Anterior',
        nextYear: 'Próximo Ano',
        selectDecade: 'Selecionar Década',
        prevDecade: 'Década Anterior',
        nextDecade: 'Próxima Década',
        prevCentury: 'Século Anterior',
        nextCentury: 'Próximo Século'
      },
      maxDate: this.maxDateIsToday ? moment() : false,
      minDate: this.minDateIsToday ? moment() : false
    });
    let _this = this;
    let value = null;
    if (this.control && this.control.value) value = this.control.value;
    this.control.setValue(value);
    jQuery(this.el.nativeElement).on('blur', function(){
      _this.control.setValue(this.value);
    });
  }

  ngOnDestroy(){
    jQuery(this.el.nativeElement).off();
  }
}
