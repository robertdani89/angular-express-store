import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '../interfaces/store';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  subscriptions: Subscription[] = []
  store: Store | null = null

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(this.route.params.subscribe(params => {
      if ('id' in params) {
        this.getStore(params['id'])
      }
    }))
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe())
  }

  private getStore(id: string) {
    this.subscriptions.push(this.storeService.getStore(id).subscribe(res => {
      if (res) {
        this.store = res
      }
    }))
  }
}
