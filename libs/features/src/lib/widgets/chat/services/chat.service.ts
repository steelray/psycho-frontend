import { Injectable } from '@angular/core';
import { AuthService, ChatApiService, IClientConsultation, IUser, WindowService, WSService, WS_COMMANDS } from '@psycho/core';
// import { ZoomMtg } from '@zoomus/websdk';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { IChatMessage } from '../interfaces/chat.interface';


declare var ZoomMtg: any;

@Injectable({
  providedIn: 'any'
})
export class ChatService {
  readonly ownerID$ = this.authService.userData$.pipe(
    startWith({
      token: 'asd',
      is_client: true,
      is_psychologist: false,
      id: 7
    }),
    filter(data => !!data),
    map(data => data?.id)
  );
  readonly userData$ = this.authService.userData$;

  constructor(
    private readonly authService: AuthService,
    private readonly chatApiService: ChatApiService,
    private readonly ws: WSService,
    private readonly windowService: WindowService
  ) {
  }



  startMeeting(consultationId: number): Observable<any> {
    return this.chatApiService.startMeeting(consultationId);
  }

  joinMeeting(consultationId: number): Observable<any> {
    return this.chatApiService.joinMeeting(consultationId);
  }


  getMessages(page = 0, limit: 50, receiverId: number): Observable<IChatMessage[]> {
    return this.chatApiService.getMessages({
      receiver_id: receiverId,
      page,
      limit
    })
  }

  onMessageSend(message: string, ownerId: number, consultationId: number): void {
    this.ws.sendMessage({
      message,
      command: WS_COMMANDS.SEND_MESSAGE,
      user: ownerId,
      consultation: consultationId
    })
  }

  initializeWebSDK(zoomClient: any): void {


    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();

    ZoomMtg.i18n.load('ru-RU');
    ZoomMtg.i18n.reload('ru-RU');

    ZoomMtg.init({
      leaveUrl: this.windowService.location.href,
      isSupportAV: true,
      success: function () {
        ZoomMtg.join({
          signature: zoomClient.signature,
          meetingNumber: zoomClient.meetingNumber,
          userName: zoomClient.userName,
          apiKey: zoomClient.apiKey,
          //userEmail: 'user@gmail.com',
          passWord: zoomClient.passWord,
          success: function () {
            //var joinUrl = "meeting.html?" + testTool.serialize(meetConfig);
            //window.open(joinUrl, "_blank");
          },
          error: function (res: any) {
            console.log(res);
          }
        })
      }
    })
  }

}