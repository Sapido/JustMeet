import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botbar',
  templateUrl: './botbar.component.html',
  styleUrls: ['./botbar.component.scss'],
})
export class BotbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  nvgt(x: string) {
    this.router.navigate(['/justmeet/' + x]);
  }

}
