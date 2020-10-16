import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  message = [{
    img: "assets/img/bible.jpg",
    titulo: "Estudo de Coríntios",
    dias: "11/05/2020 - 20/12/2020",
    mensagem: "Todas Quartas nos cultos das 18, com o pastor Presidente Edson Famanda"
  },
  {
    img: "",
    titulo: "Estudo de Coríntios",
    dias: "11/05/2020 - 20/12/2020",
    mensagem: "Todas Quartas nos cultos das 18, com o pastor Presidente Edson Famanda"
  },
  {
    img: "",
    titulo: "Estudo de Coríntios",
    dias: "11/05/2020 - 20/12/2020",
    mensagem: "Todas Quartas nos cultos das 18, com o pastor Presidente Edson Famanda"
  }
  ]

  constructor() { }

  ngOnInit() {
  }

}
