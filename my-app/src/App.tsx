import { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
class App extends Component {
  state = {
    value: []
  }
  componentDidMount() {
    axios.get("http://localhost:29483/api/values")
      .then((response) => {
        console.log(response);
        this.setState({
          value: response.data
        })
      })

  }
  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.value.map((val: any) => (
            
            <List.Item key={val.id}>{val.name}</List.Item>
          ))}
        </List>
      </div>
    )
  }

}

export default App;
