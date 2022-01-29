import axios from 'axios'

export default class PostApi {
     static async getAllPosts(limit = 10, page = 1 ){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
            /* set params */
            {
               params: {
                   _limit: limit,
                   _page: page
               }
            })
            return response
         
     }
}
