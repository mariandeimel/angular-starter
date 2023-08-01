import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from '@core/services/layout.service';
import { Layout } from '@core/enums/layout';
import { LayoutAdminComponent } from '@core/components/layouts/layout-admin/layout-admin.component';
import { LayoutDefaultComponent } from '@core/components/layouts/layout-default/layout-default.component';
import { LayoutAuthComponent } from '@core/components/layouts/layout-auth/layout-auth.component';
import { BreadcrumbService } from '@core/services/breadcrumb.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutAdminComponent, LayoutDefaultComponent, LayoutAuthComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly Layout = Layout
  constructor(public layoutService: LayoutService, private breadcrumbService: BreadcrumbService) { }
}
