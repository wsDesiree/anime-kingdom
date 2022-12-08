import { Component } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from "@angular/common/http";
import { tap } from "rxjs";

@Component({
    selector:'app-loading-spinner',
    template: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
    styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Outgoing request');
        console.log(req.url);
        console.log(req.headers);
        return next.handle(req).pipe(tap(event => {
          if (event.type === HttpEventType.Response){
            console.log('Incoming response');
            console.log(event.body);
          }
        }));
}
}
