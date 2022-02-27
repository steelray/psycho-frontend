import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, ViewChildren, ViewChild, AfterViewInit, QueryList, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatList, MatListItem } from '@angular/material/list';
import { CONSULTATION_FORMAT, CONSULTATION_STATUS, IClientConsultation, IUserAuthData } from '@psycho/core';

import { Action } from './shared/model/action';
import { User } from './shared/model/user';
import { SocketService } from './shared/services/socket.service';


@Component({
  selector: 'psycho-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnDestroy, AfterViewInit {
  @Input() userAuthData?: IUserAuthData;
  @Input() receiver!: User;
  @Input() consultation!: IClientConsultation;

  @Output() loadHistory = new EventEmitter();

  readonly messages$ = this.socketService.messages$;
  readonly statusEnum = CONSULTATION_STATUS;

  action = Action;
  messageContent!: string | null;

  // getting a reference to the overall list, which is the parent container of the list items
  @ViewChild(MatList, { read: ElementRef, static: true }) matList!: ElementRef;

  // getting a reference to the items/messages within the list
  @ViewChildren(MatListItem, { read: ElementRef }) matListItems!: QueryList<MatListItem>;

  constructor(
    private socketService: SocketService,
    public dialog: MatDialog) {
  }

  ngOnDestroy(): void {
    this.socketService.resetMessages(); // reset current messages
  }

  ngAfterViewInit(): void {
    // subscribing to any changes in the list of items / messages
    this.matListItems.changes.subscribe(elements => {
      this.scrollToBottom();
    });
  }

  // auto-scroll fix: inspired by this stack overflow post
  // https://stackoverflow.com/questions/35232731/angular2-scroll-to-bottom-chat-style
  private scrollToBottom(): void {
    try {
      this.matList.nativeElement.scrollTop = this.matList.nativeElement.scrollHeight;
    } catch (err) {
    }
  }



  public sendMessage(message: string): void {
    this.socketService.sendMessage({
      message,
      consultation_id: this.consultation?.id,
      receiver_id: this.receiver?.id
    })
    this.messageContent = null;
  }

  public sendNotification(action: Action): void {
    this.socketService.sendNotification(action, this.consultation?.id);
  }

}
