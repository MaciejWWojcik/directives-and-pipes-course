import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  @Input() forecast!: 'sun' | 'rain' | 'cloud' | 'snow';

  // using unicode coding of emoji here:
  readonly sun = '&#127780;'
  readonly rain = '&#127783;'
  readonly cloud = '&#127781;'
  readonly snow = '&#127784;'
  readonly rainbow = '&#127752;'
}
