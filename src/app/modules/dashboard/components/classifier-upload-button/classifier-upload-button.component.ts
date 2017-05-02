import { RequestOptions, RequestMethod, Headers, Request, Http } from '@angular/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'classifier-upload-button',
  templateUrl: './classifier-upload-button.component.html',
  styleUrls: ['./classifier-upload-button.component.css']
})
export class ClassifierUploadButtonComponent implements OnInit {
  @Output() onSelectImgSrc : EventEmitter<File> = new EventEmitter();
  constructor(private http: Http) { }

  ngOnInit() {
  }

  file_src;
  fileChange (input) {
    let files : FileList = input.target.files;
    this.readFile(files)
  }

  readFile (files) {
    console.log(files[0]);
    let reader = new FileReader();

    reader.onload = () => {
      this.file_src = reader.result;
      this.onSelectImgSrc.emit(reader.result);
    }
    reader.readAsDataURL(files[0]);
  }
  /*fileChange(event) {
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
    headers.set('Content-Type', 'mulitpart/form-data');
    headers.set('Accept', 'application/json');
    headers.set('userId', '57ff71b171743a50369a3b56');
    headers.set('clientId', 'androidApp');
    headers.set('clientSecret', 'androidSecret');
    headers.set('accessToken', 'EAAXZA4giEFwwBAKZA9y2cVfBQgc5UaknkhN2C8ljoZCh3DwpuEoSLZAFzIfQoVZCH3xOXzLgHfZC75fBqQgeCyvstsMHovgypz0HUZA0ARUndItAVoTTsAXrwxhlM1RwKgayDzAyxGv01ED31ZBu790hbRpebXGcGYdHZBEubQ0Bf6oZB3R7OBZC1dUoofzeSB28McQlZAjma3RndpDhi5jxrunXBJZAxQu6tuU4ZD');
  
  console.log(headers)
    let options = new RequestOptions({ 
      headers : headers
    });


    this.http.post('http://localhost:3000/api/v1/posts', formData, options)
      .map(res => res.json())
      .subscribe(data => console.log(data))
     //var req = new Request(options);
    }
   
  }*/

  

}
