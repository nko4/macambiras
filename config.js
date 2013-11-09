'use strict';

exports.port = process.env.PORT || 8000;
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'localhost/drywall'
};
exports.companyName = 'LabMacambira';
exports.projectName = 'Waterbear Playground';
exports.systemEmail = 'vilson@void.cc';
exports.cryptoKey = '123';
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName +' Website',
    address: process.env.SMTP_FROM_ADDRESS || 'vilson@void.cc'
  },
  credentials: {
    user: process.env.SMTP_USERNAME || 'vilson@void.cc',
    password: process.env.SMTP_PASSWORD || 'p3g4n4p1c0n4z0n4',
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    ssl: true
  }
};
exports.oauth = {
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || 'Od2EvhqXg9LUE6Tbw0Hvg',
    secret: process.env.TWITTER_OAUTH_SECRET || 'tQUI7gl7rmXHB3zPa6CcWQjLw5JIY4vajFRdZUwkv4'
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '537428593014456',
    secret: process.env.FACEBOOK_OAUTH_SECRET || 'fc2067787e80d40d628ed4905b1c6ded'
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  }
};
