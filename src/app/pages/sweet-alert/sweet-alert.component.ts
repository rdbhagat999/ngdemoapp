import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.scss']
})
export class SweetAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  simpleAlert() {
    Swal.fire('This is a simple and sweet alert');
  }

  // Error 
  showErrorAlert() {
    Swal.fire('Yikes!', 'Something went wrong!', 'error')
  }

  // Success
  showSuccessAlert() {
    Swal.fire('Hurray!', 'Record saved!', 'success')
  }

  // Information
  showInfoAlert() {
    Swal.fire('Fyi;', 'This is a Sweet Alert!', 'info')
  }

  // Warning
  showWarningAlert() {
    Swal.fire('Hey!', 'This is a restricted zone', 'warning')
  }

  // Question
  showQuestionAlert() {
    Swal.fire('There?', 'Are we still connected?', 'question')
  }

  // Custom Buttons
  handleWarningAlert() {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      position: 'center',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {

      if (result.isConfirmed) {

        console.log('Clicked Yes, File deleted!');

      } else if (result.isDismissed) {

        console.log('Clicked No, File is safe!');

      }
    })

  }

  // Alert with footer
  showAlertWithFooter() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      showConfirmButton: false,
      showCancelButton: false,
      timer: 2000,
      footer: `
      <a href>FAQ</a>
      <a href>Contact Us</a>
      <a href>Check Details</a>
      `
    })
  }

}
