function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

const log = function (date) {
  return function (type) {
    return function (message) {
      return console.log([date, type, message]);
    };
  };
};

log(new Date())('WARNING')('Check the code at ...'); // [ 2022-04-04T08:14:19.296Z, 'WARNING', 'Check the code at ...' ]

const logNow = log(new Date());

logNow('ERROR')('You forgot to import ...'); // [ 2022-04-04T08:14:19.301Z, 'ERROR', 'You forgot to import ...' ]

const logErrorNow = logNow('ERROR');

const logWarningNow = logNow('WARNING');

logErrorNow('You forgot to import ...'); // [ 2022-04-04T08:14:19.301Z, 'ERROR', 'You forgot to import ...' ]

logWarningNow('Check the code at ...'); // [ 2022-04-04T08:14:19.301Z, 'WARNING', 'Check the code at ...' ]
