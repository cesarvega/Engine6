import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatDividerModule, MatIconModule, MatTabsModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { ProfileService } from 'app/main/pages/profile/profile.service';
import { ProfileComponent } from 'app/main/pages/profile/profile.component';
import { ProfileTimelineComponent } from 'app/main/pages/profile/tabs/timeline/timeline.component';
import { ProfileAboutComponent } from 'app/main/pages/profile/tabs/about/about.component';
import { ProfilePhotosVideosComponent } from 'app/main/pages/profile/tabs/photos-videos/photos-videos.component';

import { TranslateModule } from '@ngx-translate/core';


import { MatFormFieldModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

const routes = [
    {
        path     : 'profile',
        component: ProfileComponent,
        resolve  : {
            profile: ProfileService
        }
    }
];

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileTimelineComponent,
        ProfileAboutComponent,
        ProfilePhotosVideosComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        TranslateModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatDividerModule,
        MatTabsModule,

        FuseSharedModule
    ],
    providers   : [
        ProfileService
    ]
})
export class ProfileModule
{
}
