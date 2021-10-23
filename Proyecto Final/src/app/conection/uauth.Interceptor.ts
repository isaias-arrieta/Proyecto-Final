import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { DataService } from "src/app/conection/data.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private datasv: DataService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.datasv.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}