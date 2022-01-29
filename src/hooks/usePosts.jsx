import {useMemo} from 'react'

export const useSortedPosts = (posts, sort) =>  {
    return useMemo(() => {
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
          return posts
        }
      }, [sort, posts])
    
}

export const usePosts = (posts, sort, query) => {
    const toSortPosts = useSortedPosts(posts, sort)
    return useMemo(() => {
        return toSortPosts.filter((post) => {
          return post.title.toLocaleLowerCase().includes(query.toLowerCase())
        })
      }, [query, sort, posts])
}