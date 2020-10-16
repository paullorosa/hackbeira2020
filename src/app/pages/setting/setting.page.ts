import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  numbers = [{
    nome: "Paulo Rosa",
    number: 842770000
  }]

  constructor() { }

  addNumber(n, m) {
    this.numbers.push(
      {
        nome: n,
        number: m
      }
    )

  }

  ngOnInit() {
  }

}
