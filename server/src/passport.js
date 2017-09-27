const passport = require('passport')

const { User } = require('./models')
const config = require('./config/config')

const JWT = require('passport-jwt')
const JwtStrategy = JWT.Strategy
const ExtractJwt = JWT.ExtractJwt

passport.use(
  new JwtStrategy(
    {
      // Options
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.authentication.jwtSecret
    },
    async function (jwtPayload, done) {
      try {
        const user = await User.findOne({
          where: {
            id: jwtPayload.id
          }
        })
        if (!user) {
          return done(new Error(), false)
        } else {
          return done(null, user)
        }
      } catch (err) {
        return done(new Error(), false)
      }
    }
  )
)

module.exports = null
