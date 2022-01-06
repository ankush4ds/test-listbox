import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities: City[];
  selectedCity: City;
  selectedCityText: string;
  constructor(private primengConfig: PrimeNGConfig) {
    this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  citySelected(event) {
    alert("Click fired");
    this.selectedCityText = event.value.name;
  }
}
