export class Quotes {
  public showDetails:boolean;
  
  constructor(public quote:string,public author:string,public upvotes:number,public downvotes:number,public userNames:string,public uploadDate:Date){
    this.showDetails=false,
    this.upvotes=0
    this.downvotes=0
  }
}
