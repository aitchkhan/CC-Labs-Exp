import { RequestOptions, RequestMethod, Headers, Request, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'classifier-upload-button',
  templateUrl: './classifier-upload-button.component.html',
  styleUrls: ['./classifier-upload-button.component.css']
})
export class ClassifierUploadButtonComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  fileChange(event) {
    console.log(event.target.files);
    let fileList : FileList = event.target.files;
    let formData: FormData = new FormData();
    if(fileList.length > 0) {
      let file : File  = fileList[0];
    formData.append('uploadFile', file, file.name);
    formData.append('title', 'Awesome Ferrari')
    formData.append('type', '0'); 
    formData.append('userId', '58660db4988168ffbd5aa414');

    let headers = new Headers();
    headers.append('Content-Type', 'mulitpart/form-data');
    headers.append('Accept', 'application/json');
    headers.append('userId', '57ff71b171743a50369a3b56');
    headers.append('clientId', 'androidApp');
    headers.append('clientSecret', 'androidSecret');
    headers.append('accessToken', 'EAAXZA4giEFwwBAKZA9y2cVfBQgc5UaknkhN2C8ljoZCh3DwpuEoSLZAFzIfQoVZCH3xOXzLgHfZC75fBqQgeCyvstsMHovgypz0HUZA0ARUndItAVoTTsAXrwxhlM1RwKgayDzAyxGv01ED31ZBu790hbRpebXGcGYdHZBEubQ0Bf6oZB3R7OBZC1dUoofzeSB28McQlZAjma3RndpDhi5jxrunXBJZAxQu6tuU4ZD');
  
  console.log(headers)
    let options = new RequestOptions({ 
      headers : headers
    });


    this.http.post('http://localhost:3000/api/v1/posts', formData, options)
      .map(res => res.json())
      .subscribe(data => console.log(data))
     //var req = new Request(options);
    }
   
  }

}
