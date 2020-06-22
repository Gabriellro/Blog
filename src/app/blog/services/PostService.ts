import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostlistItem } from './dataModel/PostListItem';
import { PostResource } from './PostResource';

@Injectable({providedIn: 'root'})
export class PostService {
    constructor( private postResource: PostResource) {

    }

    public getAllPostItem(): Observable<PostlistItem[]> {
        return this.postResource.findAll();
    }

}