import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/interfaces/store';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-store-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  faInfoCircle = faInfoCircle
  
  @Input() store: Store | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
