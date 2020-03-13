import { Component, OnInit } from '@angular/core';
import { NewStoryService } from '../service/new-stories.service';
import { Observable } from 'rxjs';
import { NewStory } from '../models/new-story.model';

@Component({
  selector: 'app-new-stories-list',
  templateUrl: './new-stories-list.component.html',
  styleUrls: ['./new-stories-list.component.scss']
})

export class NewStoriesListComponent implements OnInit {
  stories$: Observable<NewStory[]>;
  title: 'Newes Stories';
  constructor(protected newStoryService: NewStoryService) { }

  ngOnInit(): void {
    this.stories$ = this.newStoryService.loadStories();

    // .subscribe(x => {
    //   if (x) {
    //     console.log(x, 'result');
    //   }
    // });
  }

}
