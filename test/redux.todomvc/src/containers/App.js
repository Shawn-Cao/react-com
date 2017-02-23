// import { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

import { hydrate, register } from 'react-com';
import appJson from './App.com.json';

register({ Header, MainSection }); //register all custom components to react-com

const App = ({todos, actions}) => hydrate(appJson, {todos, actions});

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
