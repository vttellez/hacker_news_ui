import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
    declarations: [],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule
    ],
    providers: [

    ]
})
export class AppMaterialModule { }
