import { PreloadingStrategy, Route } from "@angular/router";
import { Injectable } from "@angular/core";

import { Observable, of, timer } from "rxjs";
import { flatMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load): Observable<any> {
    const loadRoute = (delay, time) =>
      delay ? timer(time ? time : 1000).pipe(flatMap(_ => load())) : load();
    return route.data && route.data.preload
      ? loadRoute(route.data.delay, route.data.time)
      : of(null);
  }
}
