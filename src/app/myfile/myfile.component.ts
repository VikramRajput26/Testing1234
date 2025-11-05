import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myfile',
  imports: [],
  templateUrl: './myfile.component.html',
  styleUrl: './myfile.component.css'
})
export class MyfileComponent {
selectedFile: File | null = null;
  message: string = '';

  // Replace with your backend API base URL
  apiUrl = 'https://localhost:7074/api/Bucket/upload';

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadFile() {
    if (!this.selectedFile) {
      this.message = 'Please select a file first.';
      return;
    }

    const bucketName = 'testing-s3nov5'; // change to your actual bucket
    const prefix = 'testfile'; // optional folder path inside bucket

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('bucketName', bucketName);
    formData.append('prefix', prefix);

    this.http.post(this.apiUrl, formData, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          this.message = res;
        },
        error: (err) => {
          console.error(err);
          this.message = 'Upload failed. Check console for details.';
        }
      });
  }
}
