import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/PostService';
import { Observable } from 'rxjs';
import { PostlistItem } from '../services/dataModel/PostListItem';

@Component({
    selector: 'app-post-list',
    templateUrl: 'postList.html'
})

export class PostListComponent implements OnInit {

    public postList: Observable<PostlistItem[]>;
    constructor(private postService: PostService) { }

    ngOnInit() { 
        this.postList = this.postService.getAllPostItem();
    }
}
