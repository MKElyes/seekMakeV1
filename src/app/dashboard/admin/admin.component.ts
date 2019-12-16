import { Component, OnInit } from '@angular/core';
declare const $ :any


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  constructor() { }

  ngOnInit() {
    this.loadScript('https://kit.fontawesome.com/d8083af4d6.js')

  }

}
