import { Injectable } from '@angular/core';
import { HttpHelper } from 'src/app/shared/services/http-helper';
import { Observable, of } from 'rxjs';
import { NewStory } from '../models/new-story.model';

@Injectable({
    providedIn: 'root'
})
export class NewStoriesHttpService {
    private endPoint = 'stories';
    constructor(private httpHelper: HttpHelper) {

    }

    getNewStories(page: number = 0): Observable<NewStory[]> {
       return this.httpHelper.get<NewStory[]>(this.endPoint);
    }
}
