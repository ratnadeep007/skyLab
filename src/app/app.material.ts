import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
    imports: [ 
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [ 
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule
    ],
})

export class  MatModule {} 