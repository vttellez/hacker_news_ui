import { Pipe, PipeTransform } from '@angular/core';
import { NewStory } from 'src/app/new-stories/models/new-story.model';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: NewStory[], searchText: string): any[] {
        if (!items) {
            return [];
        }

        if (!searchText) {
            return items;
        }

        searchText = searchText.toLowerCase();

        return items.filter(it => {
            return it.author.toLowerCase().includes(searchText);
        });
    }
}
