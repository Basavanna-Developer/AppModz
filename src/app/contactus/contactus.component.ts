import { Component, OnInit } from '@angular/core';
import '../../assets/js/smtpJS.js';
import { NgForm } from '@angular/forms';
declare let Email: any;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'geetharao.official@gmail.com',
      Password: 'Suresh123',
      To: 'geetharao@AppModernize.com',
      From: 'geetharao.official@gmail.com',
      Subject: f.form.value.subject,
      Body: `
    <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${f.form.value.name} <br /> <b>Email: </b>${f.form.value.email}<br /> <b>Subject: </b>${f.form.value.subject}<br /> <b>Message:</b> <br /> ${f.form.value.message} <br><br> <b>~End of Message.~</b> `
    }).then(
      message => {
        alert(message); f.resetForm();
      });

  }

}
