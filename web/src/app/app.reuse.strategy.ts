// NOT WORKING ON FEW ERROR PAGES IN ROW

// import {ActivatedRouteSnapshot} from '@angular/router';
// import {RouteReuseStrategy, DetachedRouteHandle} from '@angular/router';
//
// function routeToUrl(route: ActivatedRouteSnapshot): string {
//   if (route.url) {
//     if (route.url.length) {
//       return route.url.join('/');
//     } else {
//       if (typeof route.component === 'function') {
//         return `[${route.component.name}]`;
//       } else if (typeof route.component === 'string') {
//         return `[${route.component}]`;
//       } else {
//         return `[null]`;
//       }
//     }
//   } else {
//     return '(null)';
//   }
// }
//
// function calcKey(route: ActivatedRouteSnapshot) {
//   let next = route;
//   let url = route.pathFromRoot.map(it => routeToUrl(it)).join('/') + '*';
//   while (next.firstChild) {
//     next = next.firstChild;
//     url += '/' + routeToUrl(next);
//   }
//   return url;
// }
//
// export class CustomReuseStrategy implements RouteReuseStrategy {
//
//   handlers: { [key: string]: DetachedRouteHandle } = {};
//
//   shouldDetach(route: ActivatedRouteSnapshot): boolean {
//     if (!route.routeConfig || route.routeConfig.loadChildren) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//
//   store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
//     const key = calcKey(route);
//     this.handlers[key] = handle;
//   }
//
//   shouldAttach(route: ActivatedRouteSnapshot): boolean {
//     const key = calcKey(route);
//     return !!route.routeConfig && !!this.handlers[key];
//   }
//
//   retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
//     if (!route.routeConfig) {
//       return null;
//     }
//     const key = calcKey(route);
//     return this.handlers[calcKey(route)];
//   }
//
//   shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
//     const furtureKey = calcKey(future);
//     const currentKey = calcKey(curr);
//     return furtureKey === currentKey;
//   }
// }
