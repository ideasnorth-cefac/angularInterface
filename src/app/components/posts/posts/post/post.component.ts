import { Component, OnInit, Input } from '@angular/core';
import { post_interface } from '../../post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: post_interface;
  constructor() { }

  ngOnInit(): void {
  }

}