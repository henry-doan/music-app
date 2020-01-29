import React, { Component } from 'react';
import { Form, FormButton } from 'semantic-ui-react';
import { TrackConsumer } from '../../providers/TrackProvider';

class SearchTracks extends Component {
  state = { query: '', results: [] }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    debugger
    this.props.search(this.state.query)
  }

  render() {
    const { query } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          name='query'
          value={query}
          onChange={this.handleChange}
          required
        />
        <Form.Button>Search</Form.Button>
      </Form>
    )
  }
}

const ConnectedSearchTracks = (props) => {
  return (
    <TrackConsumer>
      { value =>
        <SearchTracks {...props} {...value} />
      }
    </TrackConsumer>
  )
}

export default ConnectedSearchTracks;