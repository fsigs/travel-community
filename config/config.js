module.exports = {
  development: {
    db: {
      url: 'mongodb://127.0.0.1:27017/travelCommunity'
    },
    app: {
      port: 3000
    }
  },
  production: {
    db: {
      url: process.env.MONGODB_URI
    },
    app: {
      port: process.env.PORT
    }
  }
};