import React, { Component } from 'react';
import { connect } from 'react-redux'
// これがcontainer的な役割かも
// これでstoreとAppコンポーネントを接続
// これにより、store内のstateが参照できるようになります
import _ from 'lodash'
import { Link } from 'react-router-dom'


import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    // ここで外部のapiサーバーよりデータを取得
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key ={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
// これによりvalueを受け取れる

const mapDispatchToProps = ({ readEvents })
// これにより遷移が可能になる

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)


// export default App;
