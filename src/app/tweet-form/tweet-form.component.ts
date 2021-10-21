import { Component, OnInit } from '@angular/core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {

  faExclamationTriangle = faExclamationTriangle;
  tweetList: string[] = [];
  currentTweet = "";

  constructor() { }

  ngOnInit(): void {
  }

  onTweetSubmit() {
    this.tweetList.unshift(this.currentTweet);
    this.currentTweet = "";
  }
}
