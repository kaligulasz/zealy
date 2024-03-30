import {FormEvent, useState} from 'react';
import { CommentType } from '../../App';

import { CommentsWrapper } from './styles';

type CommentsProps = {
  comments: CommentType[] | [],
  handleAddComment: (newComment: string) => void,
}
const Comments = ({comments, handleAddComment}: CommentsProps) => {
  const [comment, setComment] = useState('')
  const handleSubmitComment = () => {
    if (comment) {
      handleAddComment(comment);
      setComment('');
    }
  }

  const setText = (e: FormEvent<HTMLTextAreaElement>) => {
    setComment(e.currentTarget.value)
  }

  return (
    <CommentsWrapper>
      <div>
        {comments.map((item) => (<div key={item.id}>{item.comment}</div>))}
      </div>
      <div>
        <textarea value={comment} onChange={setText} />
        <button onClick={handleSubmitComment}>add comment</button>
      </div>
    </CommentsWrapper>
  )
}

export default Comments;