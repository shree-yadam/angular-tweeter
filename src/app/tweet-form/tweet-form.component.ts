import { Component, OnInit } from '@angular/core';
import { faExclamationTriangle, faFlag, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {

  faExclamationTriangle = faExclamationTriangle;
  faFlag= faFlag;
  faRetweet = faRetweet;
  faHeart = faHeart;
  tweetList = [{
    name: "Newton",
    avatar: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac",
    text: "If I have seen further it is by standing on the shoulders of giants",
    date: "5 days ago",
  },
  {
    name: "Descartes",
    avatar: "https://i.imgur.com/nlhLi3I.png",
    handle: "@rd",
    text: "Je pense , donc je suis",
    date: "10 days ago",
  },
  {
    name: "Newton",
    avatar: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac",
    text: "If I have seen further it is by standing on the shoulders of giants",
    date: "5 days ago",
  },
  {
    name: "Descartes",
    avatar: "https://i.imgur.com/nlhLi3I.png",
    handle: "@rd",
    text: "Je pense , donc je suis",
    date: "10 days ago",
  }];
  currentTweet = "";

  constructor() { }

  ngOnInit(): void {
  }

  onTweetSubmit() {
    const newTweet = {
      name: "Descartes",
      avatar: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
      text: "",
      date: "10 days ago",
    };
    newTweet.text = this.currentTweet;
    this.tweetList.unshift(newTweet);
    this.currentTweet = "";
  }
}
