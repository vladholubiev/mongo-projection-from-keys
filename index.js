const {constant, merge, size, times, zipObject} = require('lodash');

module.exports = ({include = [], exclude = []}) => {
  return merge(
    {},
    zipObject(include, times(size(include), constant(1))),
    zipObject(exclude, times(size(exclude), constant(0)))
  );
};
