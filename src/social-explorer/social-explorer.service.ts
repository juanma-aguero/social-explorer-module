import {Injectable} from '@nestjs/common';

const Twitter = require('twitter');
const {WebClient} = require('@slack/web-api');

@Injectable()
export class SocialExplorerService {
  private twitterClient;
  private slackClient;

  constructor() {
    this.twitterClient = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      bearer_token: process.env.TWITTER_BEARER_TOKEN
    });

    this.slackClient = new WebClient(process.env.SLACK_TOKEN);

  }

  async getPublications() {
    const _that = this;

    return await _that.twitterClient.get('search/tweets', {q: '#ios #node'}, function (error, tweets, response) {
      tweets.statuses.forEach(async function (tweet) {

        console.log("Tweet: ", tweet.text);

        await _that.slackClient.chat.postMessage({
          channel: 'U0FGM16TZ',
          text: tweet.text,
        });

      });
    });

  }

}
