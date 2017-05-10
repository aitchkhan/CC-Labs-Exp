import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'classifier-window',
  templateUrl: './classifier-window.component.html',
  styleUrls: ['./classifier-window.component.css']
})
export class ClassifierWindowComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  uploadImg : File = null;

  onSelectImg = function(img: File) {
    this.uploadImg = img;
  };
}
