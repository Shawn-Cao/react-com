// import { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

import { hydrate } from '../react-com';
import appJson from './App.com.json';

const appFactory = { Header, MainSection };

const App = ({todos, actions}) => hydrate(appJson, appFactory, [{todos, actions}]);

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
