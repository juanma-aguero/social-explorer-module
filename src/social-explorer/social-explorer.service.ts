import {Injectable} from '@nestjs/common';
import {Twitter} from 'twitter';

@Injectable()
export class SocialExplorerService {
  private twitterClient;

  constructor() {
    this.twitterClient = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      bearer_token: process.env.TWITTER_BEARER_TOKEN
    });
  }

  async getPublications() {

    return await this.twitterClient.get('search/tweets', {q: '#ios #swift'}, function (error, tweets, response) {
      tweets.statuses.forEach(function (tweet) {
        console.log("tweet: " + tweet.text)
      });
    });

  }

}
