import React from 'react'
import PostItem from './PostItem'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

export default function PostLists({posts, title}) {

    if(!posts.length){
        return (<h1 style={{textAlign: 'center'}}>Постов на данный момент нет</h1>)
    }
    
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
            {
                posts.map((post, index) => {
                    return <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                  >
                    <PostItem post={post}  index={index+1} />
                    </CSSTransition>
                })
            }
            </TransitionGroup>
        </div>
    )
}
