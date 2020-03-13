import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
    declarations: [],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatProgressBarModule 
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatProgressBarModule 
    ],
    providers: [

    ]
  })
  export class AppMaterialModule { }
