import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';


//     <p>Temperature in Celsius: {{ temperatureInCelsius | tempConverter:'F'}}°F</p>
@Pipe({
  name: 'tempConverter'

})
export class TempConverterPipe implements PipeTransform {

  transform(value: number, unit: string): number {
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        // Convert to Celsius
        const temperature = (value - 32) * 5 / 9;
        return Number(temperature.toFixed(2));
      } else if (unit === 'F') {
        // Convert to Fahrenheit
        const temperature = (value * 9 / 5) + 32;
        return Number(temperature.toFixed(2));
      }
    }
    return value;
  }
}
