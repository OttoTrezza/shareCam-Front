import { Component, OnInit } from '@angular/core';
import { SettingsService, SidebarService } from '../services/service.index';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(private settingsService: SettingsService,
    private sidebarService: SidebarService) { }

  ngOnInit() {
    init_plugins();
    this.sidebarService.cargarMenu();
  }

}
