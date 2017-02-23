# Rules

## objects start with special symbols have special meanings

1. '$' in object keys represent internal fields:
  1.1. '$type'
  1.2. '$children'
2. '$' in object values represent object reference:
  2.1.  '$0[.<...keys>]' reference the base .json object. (NOTE: for now, only the same object being inspected is referencable. 'up' or 'down' the object tree seems to require some complicated logic)
  2.2.  '$1', '$2' refers to extra parameters passed in. typical use case includes passing this.props as $1

## validation rules

1. $children must be either string or array of objects
2. custom $type must be provided from componentsFactory
