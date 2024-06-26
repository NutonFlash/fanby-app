module.exports = {
  login: {
    loginButton: 'a[href="/login"]',
    usernameInput: 'input[autocomplete="username"]',
    passwordInput: 'input[autocomplete="current-password"]'
  },
  conversation: {
    conversationContainer: 'div[data-testid="DmActivityContainer"]',
    conversationTotalHeightContainer: 'div[data-testid="DmScrollerContainer"]',
    conversationScrollContainer: 'div[data-testid="DmActivityViewport"]',
    messageContainer: 'div[data-testid="cellInnerDiv"]',
    messageText: 'div[data-testid="tweetText"]',
    conversationUserAvatar: 'div[data-testid*="avatar" i]',
    compositeMessage: 'div[data-testid="DMCompositeMessage"]',
    messagePicture: 'div[data-testid="image"]'
  },
  profile: {
    profileScrollContainer: 'html',
    primaryColumn: 'div[data-testid="primaryColumn"]',
    tweet: 'article[data-testid="tweet"]',
    tweetId: 'a[href*="/status"]',
    pinContainer: 'div[data-testid="socialContext"]',
    profileUserAvatar: 'div[data-testid*="avatar" i]',
    tweetRightTopButton: 'div[data-testid="caret"]',
    feedHeader: 'div[data-testid="primaryColumn"] div div:first-child',
    retweetButton: 'div[data-testid="retweet"]',
    retweetConfirmButton: 'div[data-testid="retweetConfirm"]',
    unretweetButton: 'div[data-testid="unretweet"]',
    unretweetConfirmButton: 'div[data-testid="unretweetConfirm"]'
  },
  sidebar: {
    home: 'header nav a[href="/home"]',
    explore: 'header nav a[href="/explore"]',
    notifications: 'header nav a[href="/notifications"]',
    messages: 'header nav a[href="/messages"]',
    lists: (username) => `header nav a[href="/${username}/lists"]`,
    communities: (username) => `header nav a[href="/${username}/communities"]`,
    profile: (username) => `header nav a[href="/${username}"]`
  },
  dialog: {
    mask: 'div[data-testid="mask"]',
    dialogContainer: 'div[data-testid="sheetDialog"]',
    closeButton: 'div[data-testid="app-bar-close"]',
    backButton: 'div[data-testid="app-bar-back"]'
  },
  media: {
    mediaContainer: 'div[data-testid="cellInnerDiv"]',
    imageFrame: 'div[data-testid="swipe-to-dismiss"]',
    closeButton: 'div[aria-label="Close"]'
  }
};
