import { Injectable } from '@angular/core';
import { NewStoriesHttpService } from './new-stories-http.service';
import { Observable } from "rxjs";
import { NewStory } from '../models/new-story.model';

@Injectable({
    providedIn: 'root'
})
export class NewStoryService {
    private page: number;
    
    constructor(private newStoryHttpService: NewStoriesHttpService) {
        this.page = 0;
    }

    loadStories(): Observable<NewStory[]> {
        this.increasePage();
        return this.newStoryHttpService.getNewStories(this.page);
    }

    protected increasePage() {
        this.page += 1;
    }
}
