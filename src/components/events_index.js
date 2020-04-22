import React, { Component } from 'react';
import { connect } from 'react-redux'
// これがcontainer的な役割かも
// これでstoreとAppコンポーネントを接続
// これにより、store内のstateが参照できるようになります
import _ from 'lodash'
import { Link } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    // ここで外部のapiサーバーよりデータを取得
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key ={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
          {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render(){
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12,
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
          <ContentAdd/>
        </FloatingActionButton>
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
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
