import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from 'src/environment/environment';
import emailjs from '@emailjs/browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showModal: boolean = false;
  isLoading: boolean = false;

  form: FormGroup = this.formBuilder.group({
    from_name: '',
    to_name: 'Mbuelo',
    from_email: '',
    subject: '',
    message: ''
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private location: Location) { }

  goBack() {
    this.location.back();
  }

  async send() {
    if (this.form) {
      this.isLoading = true;
      emailjs.init(environment.emailjsApiKey);
      try {
        await emailjs.send(environment.emailjsServiceId, environment.emailjsTemplateId, {
          from_name: this.form.value.from_name,
          to_name: this.form.value.to_name,
          from_email: this.form.value.from_email,
          subject: this.form.value.subject,
          message: this.form.value.message,
        });
        this.form.reset();
        this.showModal = !this.showModal;
      } catch (error) {
        console.error('Failed to send message:', error);
      } finally {
        this.isLoading = false;
      }
    }
  }

  openModal(): void {
    this.showModal = true;
  }
}
