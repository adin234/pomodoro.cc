require('./Statistics.styl')
import LoginLogout from '../components/LoginLogout'
import GenericChart from '../components/GenericChart'
import StatisticsStrip from '../components/StatisticsStrip'
import TodosStrip from '../components/TodosStrip'
import DateUtils from '../modules/DateUtils'
import * as actions from '../actions'
import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
const logo = require('../assets/images/pomodoro.cc.png')

class Statistics extends Component {
  componentWillMount() {
    const {actions} = this.props
    if( !actions ) return

    let {day} = parseQuery(window.location.search)
    day = day || DateUtils.today()
    actions.getPomodoriFor(day)
    actions.getDailyTodo(day)
  }

  before() {
    let {day} = parseQuery(window.location.search)
    day = day || DateUtils.today()
    const before = DateUtils.before(day)
    window.location.search = `?day=${before}`
  }

  after() {
    let {day} = parseQuery(window.location.search)
    day = day || DateUtils.today()
    const after = DateUtils.after(day)
    window.location.search = `?day=${after}`
  }

  render() {
    const {user} = this.props

    if( window.development ){
      return this.renderAuthorizedContent()
    }

    return user.username ? this.renderAuthorizedContent() : this.renderUnauthorizedContent()
  }

  renderAuthorizedContent() {
    const {api} = this.props
    if( api.pomodori.length === 0 ) {
      return  <div className="tac">
                <h2 className="light">Not enough data...</h2>
                <br/>
                <h1>
                  <div className="action1">Stay productive and</div>
                  <Link to="/" className="action">start your first pomodoro!</Link>
                  <span>&nbsp;:)</span>
                </h1>
                <br/>
                <div>
                  <div onClick={this.before.bind(this)}>before</div>
                  <div onClick={this.after.bind(this)}>after</div>
                </div>
                <br/>
                <br/>
                <img src={logo} alt="pomodoro.cc" width="100"></img>
              </div>
    }

    return  <div className="tac">
              <div className="ovs-extended">
                <GenericChart data={api.pomodori}/>
              </div>
              <div>
                <div onClick={this.before.bind(this)}>before</div>
                <div onClick={this.after.bind(this)}>after</div>
              </div>
              <StatisticsStrip data={api.pomodori}/>
              <TodosStrip data={api.todaysCompletedTodos}/>
            </div>
  }

  renderUnauthorizedContent() {
    const {user} = this.props
    return  <div className="content tac">
              <h3>You need to be logged in to see your statistics</h3>
              <p>
                Signup for <strong>free</strong>,
                <br/>
                you are one click away:
              </p>
              <LoginLogout user={user}/>
            </div>
  }
}

Statistics.propTypes = {
  api: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({
    api: state.api,
    user: state.user,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions,dispatch),
  })
)(Statistics)


function parseQuery(qstr) {
  var query = {};
  var a = qstr.substr(1).split('&');
  for (var i = 0; i < a.length; i++) {
    var b = a[i].split('=');
    query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
  }
  return query;
}
