import { Directive,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appUpvote]'
})
export class UpvoteDirective {
  //  private upvoteNum=0;
  constructor(private elem:ElementRef) {}

}
