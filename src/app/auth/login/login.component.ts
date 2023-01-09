import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
                private formBuilder: FormBuilder,
                private route: Router,
                private authService: AuthService
              ) {

    this.form = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  logged(event: Event) {
    if(this.form.invalid) {
      return
    }
    event.preventDefault;
    this.authService.logged(this.form.value).subscribe((data) => {
      this.route.navigate(['/home'])
    })
  }

}
