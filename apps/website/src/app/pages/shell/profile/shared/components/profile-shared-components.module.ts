import { NgModule, Type } from '@angular/core';
import { CoreSharedModules } from '@psycho/core';
import { DirectivesModule, PipesModule, UIModule } from '@psycho/features';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { ProfileChatLayoutComponent } from './profile-chat-layout/profile-chat-layout.component';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { ProfileSidebarHeaderComponent } from './profile-sidebar-header/profile-sidebar-header.component';
import { ProfileSidebarMenuComponent } from './profile-sidebar-menu/profile-sidebar-menu.component';
import { ProfileVideoChatComponent } from './profile-video-chat/profile-video-chat.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PsychologistInfoComponent } from './psychologist-info/psychologist-info.component';
import { MatButtonModule } from '@angular/material/button';
import { FormFieldModule } from '@psycho/web/features';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClientInfoDialogComponent } from './client-info-dialog/client-info-dialog.component';

const DECLARATIONS: Array<Type<any> | any[]> = [
  ProfileLayoutComponent,
  ProfileSidebarHeaderComponent,
  ProfileSidebarMenuComponent,
  ProfileVideoChatComponent,
  ProfileChatLayoutComponent,
  PsychologistInfoComponent,
  ClientInfoDialogComponent
];



@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
    CoreSharedModules,
    UIModule,
    PipesModule,
    MaterialIconCustomizeModule,
    MatTabsModule,
    MatButtonModule,
    FormFieldModule,
    ReactiveFormsModule,
    DirectivesModule,
    MatProgressSpinnerModule
  ]
})
export class ProfileSharedComponentsModule { }