import React, {Component} from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';

import Container from 'components/Container'
import Header from 'components/Header'
import Content from 'components/Content';
import CommentsList from 'containers/CommentsListContainer'
import Footer from 'components/Footer';
import Timer from 'components/Timer';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isShown: false
    }
}

handleToggleClick = () => {
    this.setState((prevState) => ({isShown: !prevState.isShown}));
};

  render() {
    const { isShown } = this.state;
    return (
      <div>
        <Container>
          <Header />
          {isShown && <Timer/>}
          <button onClick={this.handleToggleClick}>Нажми</button>
          <Content />
          <CommentsList />
          <Footer />
        </Container>
      </div>
  );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
);