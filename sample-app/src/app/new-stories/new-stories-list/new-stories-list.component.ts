import { Component, OnInit } from '@angular/core';
import { NewStoryService } from '../service/new-stories.service';
import { Observable, zip, of, forkJoin, merge } from 'rxjs';
import { NewStory } from '../models/new-story.model';
import { map, withLatestFrom, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-new-stories-list',
  templateUrl: './new-stories-list.component.html',
  styleUrls: ['./new-stories-list.component.scss']
})

export class NewStoriesListComponent implements OnInit {
  stories$: Observable<NewStory[]>;
  stories: NewStory[];
  title: 'Newes Stories';
  loading: boolean;
  constructor(protected newStoryService: NewStoryService) { }

  ngOnInit(): void {
    this.loading = true;
    this.newStoryService.loadStories().subscribe(x => {
      if (x) {
        this.stories = x;
        this.loading = false;
      }
    }
    );

    // .subscribe(x => {
    //   if (x) {
    //     console.log(x, 'result');
    //   }
    // });
  }

  seeMore() {
    // zip(of([
    //   {
    //     url: '',
    //     heading: '',
    //     author: ''
    //   }
    // ]), this.stories$)
    //   .pipe(map(x => x[0].concat(x[1])))
    //   .subscribe(data => console.log('merge', data))\

    const g: Observable<NewStory[]> = of([
      {
        id: '',
        url: '',
        heading: 'Vlad',
        author: 'Vladimir'
      }
    ]);

    this.stories = [...this.stories, ...[
      {
        id: '',
        url: '',
        heading: 'Vlad',
        author: 'Vladimir'
      }
    ]];
  }

}
