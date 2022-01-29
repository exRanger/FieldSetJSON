import React, {useState} from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput';

export default function PostForm({createPost, removePost}) {

  const [post, setPost] = useState({ title: '', body: '' })

  const addPost = (e) => {
    e.preventDefault()
    createPost({...post, id: Date.now()})
    setPost({title: '', body: ''})
  }

 
  return (
    <form>
      <MyInput value={post.title}
        onChange={e => setPost((state) => (
          { ...state, title: e.target.value }
        ))}
        type="text"
        placeholder='Название поста'
      />
      <MyInput value={post.body}
        onChange={e => setPost((state) =>
        ({ ...state, body: e.target.value }
        ))}
        type="text"
        placeholder='Описание поста' />
      <MyButton onClick={addPost}>Добавить пост</MyButton>
    </form>
  )
}
