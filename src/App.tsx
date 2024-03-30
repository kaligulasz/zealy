import React, { useState, MouseEvent } from 'react';

import Reaction from './components/reaction'

import './App.css';
import {uuidv4} from "./helpers";

export type CommentType = {
  comment: string,
  author: string;
  id: string;
}

export type ReactionType = {
  position: { x: number, y: number }
  id: string,
  userName: string,
  comments: CommentType[] | [];
}

function App() {
  const [reactions, setReactions] = useState<ReactionType[] | []>([]);

  const handleAreaClick = (e: MouseEvent<HTMLElement>) => {
    setReactions((prevState) => {
      return [...prevState, {
        userName: 'ExampleUserName',
        position: {x: e.clientX, y: e.clientY},
        id: uuidv4(),
        comments: [],
      }]
    });
  };

  return (
    <div className="app" onClick={handleAreaClick} id="click-area">
      {reactions.map((reaction, id) => (
        <Reaction reaction={reaction} key={id} setReactions={setReactions} />
      ))}
    </div>
  );
}

export default App;
