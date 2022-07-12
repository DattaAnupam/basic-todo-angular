import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { UiService } from '../../services/ui/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Todo List';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggleSvc()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAddTask = () => {
    this.uiService.toggleAddTaskSvc();
  };

  hasRoute = (route: string) => {
    return this.router.url === route;
  };
}
