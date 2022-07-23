const createHttpError = require('http-errors');
const { decode } = require('jsonwebtoken');
const { User, RefreshToken } = require('../models');
const { getAccessToken, getRefreshToken } = require('../jwt');
const { destroyOverLimitTokens, getTokenCookieOptions } = require('../functions/controllers.fn');
const { REFRESH_TOKEN_NAME, ACCESS_TOKEN_NAME } = require('../constants');

module.exports.signIn = async (req, res, next) => {
  try {
    const { body: { email, password } } = req;

    const user = await User.findOne({ where: { email } });

    if (user && await user.comparePassword(password)) {
      await destroyOverLimitTokens(user);

      const accessToken = await getAccessToken(user);
      const refreshToken = await getRefreshToken(user);

      await user.createRefreshToken({
        value: refreshToken,
        expiresIn: decode(refreshToken).exp,
      });

      res
        .cookie(ACCESS_TOKEN_NAME, accessToken, getTokenCookieOptions(decode(accessToken).exp))
        .cookie(REFRESH_TOKEN_NAME, refreshToken, getTokenCookieOptions(decode(refreshToken).exp))
        .send({
          data: {
            status: 'Logged in',
          }
        });
    } else {
      next(createHttpError(401, 'Incorrect data'));
    }

  } catch (error) {
    next(error);
  }
};

module.exports.signOut = async (req, res, next) => {
  try {
    const { body: { tokens: { refresh: refreshToken } } } = req;

    const isTokenDestroyed = await RefreshToken.destroy({ where: { value: refreshToken } });

    if (isTokenDestroyed) {
      res.send({
        data: {
          status: 'Logged out',
        }
      });
    } else {
      next(createHttpError(401, 'Incorrect provided token'));
    }
  } catch (error) {
    next(error);
  }
};

module.exports.signUp = async (req, res, next) => {
  try {
    const { body } = req;
    await User.create(body);
    res.send({
      data: {
        status: 'Signed up',
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
    const { body: { email, tokens: { refresh: refreshToken } } } = req;
    const user = await User.findOne({ where: { email } });

    if (await RefreshToken.isTokenExists(refreshToken, user.id)) {
      const accessToken = await getAccessToken(user);

      res.send({
        data: {
          status: 'Updated access token',
          tokens: {
            access: accessToken,
          }
        }
      });
    } else {
      next(createHttpError(401, 'Incorrect data'));
    }

  } catch (error) {
    next(error);
  }
};