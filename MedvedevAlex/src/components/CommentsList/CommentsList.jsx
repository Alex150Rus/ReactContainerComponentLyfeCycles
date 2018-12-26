import './CommentsList.css';

import React, {PureComponent} from 'react';

export default class CommentsList extends PureComponent {
  render() {
    const { comments, loading, onLoadMore } = this.props;
    return (
      <div className="CommentsList">
        <ul>
          {comments.map((comment, idx) => <li key={idx}>{comment.name} : {comment.body}</li>)}
        </ul>
        <button onClick={onLoadMore} disabled={loading}>LoadMore</button>
      </div>
    )
  }
}