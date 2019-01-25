'use strict';

function wrapAsyncAction(asyncAction) {
  return function (request, respose, next) {
    asyncAction(request, respose, next).catch(function (error) {
      next(error);
    });
  }
}

module.exports.wrapAsyncAction = wrapAsyncAction;