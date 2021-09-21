declare var require: any;
const numeral = require('numeral');
import 'numeral/locales/pt-br';
numeral.locale('pt-br');

export class NumberHelper {

  static fromPTBR(value: string): number {
    return numeral(value).value();
  }

  static toPTBR(value: number): string {
    return numeral(value).format('0,0.00');
  }

  static toPTBR3Places(value: number): string {
    return numeral(value).format('0,0.000');
  }

  static toPTBR5Places(value: number): string {
    return numeral(value).format('0,0.00000');
  }  

  static toTrunc(value: number):number{
    return Math.trunc(value);
  }

  static toRounding(value: number):number{
    return Math.round(value);
  }
}