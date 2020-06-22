import { NgModule } from '@angular/core';
import { PostListComponent } from './PostListComponent';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
    ],
    exports: [
        PostListComponent
    ],
    declarations: [
        PostListComponent
    ],
    providers: [],
})
export class PostListModule { }
