import { Component } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { response } from '../../../core/constant/constant';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  
  message: any
  navigate() {
    this.router.navigateByUrl('/dashboard')
  }
  constructor(private route: ActivatedRoute, private router : Router) {
    // const name = this.route.snapshot.paramMap.get('message');
    this.message = response.message
  }
  
}
