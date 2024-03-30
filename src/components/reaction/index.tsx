import {SetStateAction, Dispatch, MouseEvent} from 'react'

import { ReactionType} from '../../App';
import Comments from '../comments';
import { uuidv4 } from '../../helpers';

import { ReactionWrapper, CloseButton, ReactionContent } from './style';

type ReactionProps = {
  reaction: ReactionType,
  setReactions: Dispatch<SetStateAction<[] | ReactionType[]>>
}
const Reaction = ({ reaction, setReactions }: ReactionProps) => {
  const removeReaction = () => {
    setReactions((prevState) => {
      return prevState.filter(item => item.id !== reaction.id)
    })
  }

  const handleAddComment = (newComment: string) => {
    setReactions((prevState) => {
      return prevState.map(item => {
        if(item.id === reaction.id) {
          return {
            ...item,
            comments: [...item.comments, { comment: newComment, author: 'randomAuthor', id: uuidv4()}]
          }
        }
        return item
      })
    })
  }

  const stopPropagation = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }

  return (
    <ReactionWrapper $position={reaction.position} onClick={stopPropagation}>
      <ReactionContent>
        <CloseButton onClick={removeReaction}>X</CloseButton>
        <div>{reaction.userName}</div>
        <Comments comments={reaction.comments} handleAddComment={handleAddComment} />
      </ReactionContent>
    </ReactionWrapper>
  )
}

export default Reaction;