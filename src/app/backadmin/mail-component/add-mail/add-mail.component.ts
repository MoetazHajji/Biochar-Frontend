import { Component, OnInit } from '@angular/core';
import { MailService } from '../../_services/_user/mail.service';
import { Msg } from 'src/app/_models/_Mail/Msg';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-mail',
  templateUrl: './add-mail.component.html',
  styleUrls: ['./add-mail.component.css']
})
export class AddMailComponent implements OnInit {

  
  msg : Msg = new Msg () ;
  constructor(private  mailservice  : MailService ,  private route: ActivatedRoute) { }

  ngOnInit( ): void {
   this. msg.email = this.route.snapshot.params['email'];
  }
  onAdd():void {
    this.mailservice.add(this.msg).subscribe(
      (response) => {     
        console.log( "AAAAAAA" );
        console.log(  response.body );
      }
      ,(error) => {   console.log( "error" );
        console.log( error );
      }) ;
  }
  onBack () : void {
    this.mailservice.goToComponent ( '/admin/account/list');
  }
}
