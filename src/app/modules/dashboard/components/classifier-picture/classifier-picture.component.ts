import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'classifier-picture',
  templateUrl: './classifier-picture.component.html',
  styleUrls: ['./classifier-picture.component.css']
})
export class ClassifierPictureComponent implements OnInit {
  @Input() imageSrc: File;
  constructor() { }

  ngOnInit() {
  }

}
