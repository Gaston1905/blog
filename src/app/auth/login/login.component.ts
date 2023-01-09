import { RouterModule } from '@angular/router';
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
                private route: RouterModule
              ) {

    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
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
    this.authService.Logged(this.form.value).subscribe((data) => {
      this.route.navigate(['/home'])
    })
  }

}
