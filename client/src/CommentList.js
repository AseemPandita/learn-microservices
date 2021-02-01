/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === 'approved') {
      content = comment.content;
    }

    if (comment.status === 'rejected') {
      content = 'Comment rejected by moderator.';
    }

    if (comment.status === 'pending') {
      content = 'Comment awaiting approval by moderator.';
    }

    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
};
