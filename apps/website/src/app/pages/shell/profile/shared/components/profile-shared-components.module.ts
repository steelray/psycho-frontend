import { NgModule, Type } from '@angular/core';
import { CoreSharedModules } from '@psycho/core';
import { PipesModule, UIModule } from '@psycho/features';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { ProfileChatLayoutComponent } from './profile-chat-layout/profile-chat-layout.component';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { ProfileSidebarHeaderComponent } from './profile-sidebar-header/profile-sidebar-header.component';
import { ProfileSidebarMenuComponent } from './profile-sidebar-menu/profile-sidebar-menu.component';
import { ProfileTextChatComponent } from './profile-text-chat/profile-text-chat.component';
import { ProfileVideoChatComponent } from './profile-video-chat/profile-video-chat.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PsychologistInfoComponent } from './psychologist-info/psychologist-info.component';

const DECLARATIONS: Array<Type<any> | any[]> = [
  ProfileLayoutComponent,
  ProfileSidebarHeaderComponent,
  ProfileSidebarMenuComponent,
  ProfileTextChatComponent,
  ProfileVideoChatComponent,
  ProfileChatLayoutComponent,
  PsychologistInfoComponent
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
    CoreSharedModules,
    UIModule,
    PipesModule,
    MaterialIconCustomizeModule,
    MatTabsModule
  ]
})
export class ProfileSharedComponentsModule { }