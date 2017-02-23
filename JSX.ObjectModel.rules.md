# Rules

## objects start with special symbols have special meanings

1. '$' in object keys represent internal fields:
  1.1. '$type'
  1.2. '$children'
2. '$' in object values represent object reference:
  1.1.  '$this.props.name'

## validation rules

1. $children must be either string or array of objects
2. custom $type must be provided from componentsFactory
