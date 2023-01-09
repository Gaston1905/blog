import { FormContactService } from './../../../services/form-contact.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  form!: FormGroup;

  constructor(
                private FormBuilder: FormBuilder,
                private formContact: FormContactService
  ) {
    this.form = this.FormBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  formData () {

    const formData: FormData = this.form.value;

    if(this.form.valid) {
      this.formContact.sendFormData(formData).subscribe((data: any) => {
        console.log(data);
        this.form.reset();
      })

    }


  }

}
