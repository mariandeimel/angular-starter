import { Injectable, signal } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  breadcrumbs = signal<{ title: string, url: string }[]>([])
  breadcrumbs$ = toObservable(this.breadcrumbs)

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      let root = this.activatedRoute.root
      let breadcrumbs = this.getBreadcrumbs(root)

      this.breadcrumbs.set(breadcrumbs)
    })
  }
  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: { title: string, url: string }[] = []): { title: string, url: string }[] {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb' // Use 'breadcrumb' key in your data object

    // Get the child routes
    let children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (let child of children) {
      if (child.outlet !== 'primary') {
        continue;
      }

      let routeURL: string = child.snapshot.url.map(segment => segment.path).join('/')
      url += `/${routeURL}`

      let breadcrumbTitle = ''
      if (child.snapshot.params['id'] && !breadcrumbs.find(breadcrumb => breadcrumb.title === child.snapshot.params['id'])) {
        breadcrumbTitle = child.snapshot.params['id'] // attach id to breadcrumb if exists
      } else if (child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB) && child.snapshot.data[ROUTE_DATA_BREADCRUMB] !== null) {
        breadcrumbTitle = child.snapshot.data[ROUTE_DATA_BREADCRUMB]
      } else {
        continue
      }

      let breadcrumb = {
        url: url,
        title: breadcrumbTitle,
      }

      breadcrumbs.push(breadcrumb)
      return this.getBreadcrumbs(child, url, breadcrumbs)
    }

    return breadcrumbs
  }

}

