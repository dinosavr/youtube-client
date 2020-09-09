import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-item-detail',
  templateUrl: './content-item-detail.component.html',
  styleUrls: ['./content-item-detail.component.scss']
})
// export class ContentItemDetailComponent implements OnInit {

  export class ContentItemDetailComponent implements OnInit {
    public userId: number;

    constructor(public route: ActivatedRoute) {}

    public ngOnInit(): void {
      this.route.params.subscribe(params => {
        console.log('[User Route]', params);
        this.userId = params.id;
      });

      console.log('Snapshot:', this.route.snapshot.params);
      // this.userId = this.route.snapshot.params.id;
    }

    public showInfo(): void {
      console.log('Log Snapshot:', this.route.snapshot.params);
    }

  }
