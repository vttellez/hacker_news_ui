import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStoriesListComponent } from './new-stories-list.component';
import { NewStoryService } from '../service/new-stories.service';
import { Observable, of } from 'rxjs';
import { NewStory } from '../models/new-story.model';
import { HttpClientModule } from '@angular/common/http';

const mockNewStoryService: any = {
  loadStories(): Observable<NewStory[]> {
    return of([
      {
        id: '',
        url: '',
        heading: 'The heading',
        author: 'author'
      }
    ]);
  },
};

describe('NewStoriesListComponent', () => {
  let component: NewStoriesListComponent;
  let fixture: ComponentFixture<NewStoriesListComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewStoriesListComponent],
      imports: [
        HttpClientModule,
      ],
      providers: [
        { provide: NewStoryService, useValue: mockNewStoryService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
