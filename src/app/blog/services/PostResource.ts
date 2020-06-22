import { Injectable } from '@angular/core';
import { ApiConfig } from '../ApiConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostlistItem } from './dataModel/PostListItem';

@Injectable({providedIn: 'root'})
export class PostResource {
    private readonly URL = ApiConfig.url + '/posts';
    constructor(private httpClient: HttpClient) { }

public findAll(): Observable<PostlistItem[]> {
    return this.httpClient.get(this.URL) as Observable<PostlistItem[]>;   
}
    
}