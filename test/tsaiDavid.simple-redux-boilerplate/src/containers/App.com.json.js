export default {
  "$type": "div",
  "className": "main-app-container",
  "$children": [
    {
      "$type": "div",
      "className": "main-app-nav",
      "hidden-attr": "not that simple Boilerplate",
      // "$children": "Simple Redux Boilerplate",
      "$children": "$0.hidden-attr"
    },
    {
      "$type": "Counter",
      "counter": "$1.counter",
      "actions": "$1.actions"
    },
    {
      "$type": "Footer"
    }
  ]
}
