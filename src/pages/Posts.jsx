import React, {
    useState,
    useRef,
    createContext,
    useEffect,
    useMemo,
  } from 'react'
  

  import PostLists from '../components/PostLists';
  import PostForm from '../components/PostForm';
  import PostFilter from '../components/PostFilter';
  import MyWindow from '../components/UI/modale/MyWindow';
  import MyButton from '../components/UI/button/MyButton';
  import { usePosts } from '../hooks/usePosts';
  import PostApi from '../Api/PostApi';
  import MyLoader from '../components/UI/loader/MyLoader';
  import { useFetching } from '../hooks/useFetching';
  import { getPageCount, getPagesArray } from '../utils/pages';
  import Pagination from '../components/UI/pagination/Pagination'
  
  export const MainContext = createContext()
  
  function App() {
  
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [totalPages, setTotalPages] = useState(0)
    const [visibleModal, setVisibleModal] = useState(false)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
  
    
  
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
      
      const response = await PostApi.getAllPosts(limit, page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
    })
  
    useEffect(async () => {
      fetchPosts()
    },[page])
  
    const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setVisibleModal(false)
    }
  
    const toFilterAndSort = usePosts(posts, filter.sort, filter.query)
  
    const removePost = (newPost) => {
      setPosts(posts.filter(({ id }) => newPost.id !== id))
    }
  
    return (
      <div className="App">
        <MainContext.Provider value={removePost}>
          <MyButton onClick={() => setVisibleModal(true)}>
            Создать пост
          </MyButton>
          <PostFilter
            filter={filter}
            setFilter={setFilter}
          />
          {postError && <h1>Произошла ошибка ${postError}</h1>}
          {isPostLoading 
           ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}> <MyLoader/></div>
           : <PostLists
              posts={toFilterAndSort}
              title="Список Постов 1"
            />
          }
          <MyWindow visible={visibleModal} setVisible={setVisibleModal}>
            <PostForm
              createPost={createPost}
            />
          </MyWindow>
         <Pagination
         totalPages={totalPages}
         setPage={setPage}
         page={page}
         />
        </MainContext.Provider>
      </div>
    );
  }
  
  export default App;
  