import { Injectable } from '@angular/core';

// environment import
import { environment } from 'src/environments/environment';

// !!!!!!!!!! ALTRI IMPORTS !!!!!!!!!!
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
