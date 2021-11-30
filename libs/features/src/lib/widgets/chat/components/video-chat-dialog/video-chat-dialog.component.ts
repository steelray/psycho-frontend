import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');
@Component({
  selector: 'psycho-video-chat-dialog',
  templateUrl: './video-chat-dialog.component.html',
  styleUrls: ['./video-chat-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoChatDialogComponent implements OnInit {
  // setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
  signatureEndpoint = 'http://psycho.loc/api/zoom/generate-token';
  apiKey = 'gNc_Vld8SPG0xyqUxA_6Xg'
  meetingNumber = '1'
  role = 0
  leaveUrl = 'http://localhost:4200'
  userName = 'Angular'
  userEmail = ''
  passWord = ''
  // pass in the registrant's token if your meeting or webinar requires registration. More info here:
  // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/build/meetings/join#join-registered
  // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/build/webinars/join#join-registered-webinar
  registrantToken = ''

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(MAT_DIALOG_DATA) private readonly signature: string
  ) {

  }
  ngOnInit(): void {
    this.startMeeting(this.signature);
  }



  startMeeting(signature: string) {
    const zoomRootEl = document.getElementById('zmmtg-root');
    console.log(zoomRootEl);

    if (zoomRootEl) {
      zoomRootEl.style.display = 'block'
      ZoomMtg.init({
        leaveUrl: this.leaveUrl,
        success: (success: any) => {
          console.log(success)
          ZoomMtg.join({
            signature,
            meetingNumber: this.meetingNumber,
            userName: this.userName,
            apiKey: this.apiKey,
            userEmail: this.userEmail,
            passWord: this.passWord,
            tk: this.registrantToken,
            success: (success: any) => {
              console.log(success)
            },
            error: (error: any) => {
              console.log(error)
            }
          })
        },
        error: (error: any) => {
          console.log(error)
        }
      })
    }

  }

}
