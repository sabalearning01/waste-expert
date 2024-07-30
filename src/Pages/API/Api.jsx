import React from 'react'
import { useEffect, useState } from 'react'
import'./Api.css'
import axios from 'axios'
import { json } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { CiSearch } from "react-icons/ci";

 const Api = () => {
    
     const [data, setData] = useState([])
     const [inputValue, setInputValue] = useState('')
    //  const [apiPost, setapiPost] = useState([])

     const handleInputChange = (event)=>{
           setInputValue(event.target.value)
           console.log(inputValue)
     };


     useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        console.log(response)
        // setapiPost(response.data)
           setData(response.data)
      });
    

     },[]);
     
    //  if (!post) return null;
    
    
        
  return (
    <div>
      <div className='wrapper'></div>
         <h1>3rd Challenge Data</h1> 
        
        <input type = 'text'  value={inputValue} onChange={handleInputChange} placeholder='Search'/>
        <button onClick={()=>{
          alert('Searching!')
        }}>Search</button>
        <p>Current Input Value:{inputValue}</p>

         {data.map((data)=>{
          return (
            
           <div className='data-card' key={data.id}>
            
            <h3 className="data-title">{data.title}</h3>
             <p className="data-body">{data.body}</p>
             <p className='data-comment'>{data.comment}</p>
             <div className="button">
                <div className="delete-btn">Delete</div>
             </div>
          </div>
          );
          })}
    </div>
    
  )
  
 }

// const Api = () => {

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const [filteredPosts, setFilteredPosts] = useState([]);
//   const [comments, setComments] = useState({});
//   const [expandedPostId, setExpandedPostId] = useState(null);
//   const [filter, setFilter] = useState('');
//   const [sort, setSort] = useState('title');
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 10;

//   useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/posts')
//           .then(response => response.json())
//           .then(data => {
//               setPosts(data);
//               setFilteredPosts(data);
//           });
//   }, []);

//   const fetchComments = (postId) => {
//       if (!comments[postId]) {
//           fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
//               .then(response => response.json())
//               .then(data => setComments(prevComments => ({ ...prevComments, [postId]: data })));
//       }
//   };

//   const toggleComments = (postId) => {
//       if (expandedPostId === postId) {
//           setExpandedPostId(null);
//       } else {
//           setExpandedPostId(postId);
//           fetchComments(postId);
//       }
//   };

//   const handleFilterChange = (e) => {
//       setFilter(e.target.value);
//       const filtered = posts.filter(post => 
//           post.title.includes(e.target.value) || 
//           post.body.includes(e.target.value)
//       );
//       setFilteredPosts(filtered);
//   };

//   const handleSortChange = (e) => {
//       setSort(e.target.value);
//       const sorted = [...filteredPosts].sort((a, b) => {
//           if (e.target.value === 'title') {
//               return a.title.localeCompare(b.title);
//           }
//           return a.body.localeCompare(b.body);
//       });
//       setFilteredPosts(sorted);
//   };

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//       <div>
//           <h1>Posts</h1>
//           <input 
//               type="text" 
//               value={filter} 
//               onChange={handleFilterChange} 
//               placeholder="Filter by title or body"
//           />
//           <select value={sort} onChange={handleSortChange}>
//               <option value="title">Sort by Title</option>
//               <option value="body">Sort by Body</option>
//           </select>
//           {currentPosts.map(post => (
//               <div key={post.id}>
//                   <h2>{post.title}</h2>
//                   <p>{post.body}</p>
//                   <button onClick={() => toggleComments(post.id)}>
//                       {expandedPostId === post.id ? 'Hide Comments' : 'Show Comments'}
//                   </button>
//                   {expandedPostId === post.id && comments[post.id] && (
//                       <div>
//                           <h3>Comments</h3>
//                           {comments[post.id].map(comment => (
//                               <div key={comment.id}>
//                                   <p><strong>{comment.name}</strong> ({comment.email})</p>
//                                   <p>{comment.body}</p>
//                               </div>
//                           ))}
//                       </div>
//                   )}
//               </div>
//           ))}
//           <div>
//               {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
//                   <button key={i + 1} onClick={() => paginate(i + 1)}>
//                       {i + 1}
//                   </button>
//               ))}
//           </div>
//       </div>
//   );
// };

// }



export default Api