import React from 'react';

const componentsFactory = {};

/**
 * This is the functionality to map an JS object to React components tree
 * @param {object} jsonObj - a plain JS described by primitives, which is losslessly serializabled to JSON format
 * @param {object} componentsFactory - a map contains all custom React components
 * @param {array} argumentsContext - similar to js function arguments, TODO: try pass this from scope?
 * @example App = ({todos, actions}) => hydrate(appJson, appFactory, [{todos, actions}]);
 */
export function hydrate(jsonObj, argumentsContext) {
  if (Array.isArray(jsonObj)) {  // in case of indexed childe components (array of array in jsonObj)
    return jsonObj.map(obj => hydrate(obj, argumentsContext));
  }
  let type, props = {}, children = [];
  Object.keys(jsonObj).forEach((key) => {
    let value = jsonObj[key];
    switch (key) {
      case '$type':      // hydrate type
        type = componentsFactory[value] || value; // assume user does NOT override React-dom components like 'div'
        break;
      case '$children':  // hydrate children
        children = value;
        break;
      default:           // hydrate props
        if (typeof value === 'string' && value.startsWith('$')) {
          props[key] = value.substr(1).split('.').reduce((accu, token) => accu[token], argumentsContext); // eg. arguments[0]['actions']['addTodo']
        } else {
          props[key] = value;
        }
    }
  });
  if (!type) { throw new Error('failed to review/hydrate React COM: type must be defined with \'$type\'!'); } // or we could default '$type=\'div\''?
  if (!children || children.length === 0) { // cover both empty string or empty array
    return React.createElement(
      type,
      props,
      null
    )
  } if (typeof children === 'string') {
    return React.createElement(
      type,
      props,
      children
    )
  } else {
    return React.createElement(
      type,
      props,
      ...children.map(childJsonObj => hydrate(childJsonObj, argumentsContext))
    )
  }
}

export function register(components) {
  if (typeof components === 'object') {
    Object.keys(components).forEach(key =>{
      componentsFactory[key] = components[key];
    })
  } else {
    throw new Error('not supported components type in reac-com.register');
  }
}

export default {
  hydrate,
  register
}
