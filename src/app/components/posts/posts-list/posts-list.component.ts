import { Component, OnInit } from '@angular/core';
import { DataWpService } from '../data-wp.service';
import { Observable } from 'rxjs';
import { post_interface } from '../post.interface';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  providers: [DataWpService]
})
export class PostsListComponent implements OnInit {

  constructor(private dataWp:DataWpService) { }
  posts$: Observable<post_interface[]>;

  ngOnInit(): void {
    this.dataWp.getPost().subscribe(res=>console.log(res));
    this.posts$=this.dataWp.getPost();

  }

}
