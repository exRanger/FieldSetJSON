import React, {useContext} from 'react'
import { MainContext } from '../pages/Posts'
import MyButton from './UI/button/MyButton'

export default function PostItem({post}) {

    let removePost = useContext(MainContext)

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{post.id}.{post.title}</strong>
                <div>
                   {post.body}
                </div>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => removePost(post)}>Удалить</MyButton>
            </div>
        </div>
    )
}
