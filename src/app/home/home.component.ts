import { Component, OnInit } from '@angular/core';
import {WordpressService} from '../core/wordpress.service';

@Component({
  selector: 'pb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  post$ = this.wordpressService.getPosts();

  constructor(private wordpressService: WordpressService) { }

  ngOnInit(): void {
    console.log(this.post$);
  }

}
