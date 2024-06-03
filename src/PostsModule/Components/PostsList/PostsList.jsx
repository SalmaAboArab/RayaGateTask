import React, { useEffect, useState } from 'react'
import NoData from '../../../SharedModule/Components/NoData/NoData'
import Loading from '../../../SharedModule/Components/Loading/Loading'
import axios from 'axios';
import Filter from '../../../SharedModule/Components/Filter/Filter';
import { baseUrl } from '../../../Constants/Urls/Urls';
import { useNavigate } from 'react-router-dom';
import styles from './Posts.module.css'
import { Title } from '../../../SharedModule/Components/Title/Title';

export default function PostsList() {
  const navigate = useNavigate();
  const [posts,setPosts]=useState([]);
  const [isLoading,setIsLoading]=useState(true);

  const postsNumPerPage=15;
  const [CurrentPageNum,setCurrentPageNum]=useState(1);
  const NbPages=Math.ceil(posts?.length/postsNumPerPage);
  const startIndex=(CurrentPageNum-1)*postsNumPerPage;
  const endIndex=startIndex+postsNumPerPage;
  const DataPerPage=posts?.slice(startIndex,endIndex)


  async function getAllPosts(searchValue) {
    // setIsLoading(true);
    try {
      const response=await axios.get(`${baseUrl}`)
      if(searchValue){
      const posts=response?.data?.filter((post)=> post.title.includes(searchValue))
      setPosts(posts);
      }
      else setPosts(response?.data);
    } catch (error) {
      // console.log(error);
      toast.error('Somthing went wrong!');
    }
    setIsLoading(false);
  }

  useEffect(()=>{
    getAllPosts();
  },[])
  return (
    <div className='vh-100 w-100 p-5'>
      
      {isLoading?<Loading/>
      :
      <div className="allPosts">
    <Title title={'All Posts'}/>
    <div className="search mb-5">
      <Filter getPosts={getAllPosts}/>
    </div>
  <div className=" row mb-3 justify-content-center vh-100 overflow-auto pageOverflow g-0">
      
      

   {posts.length>0?
   DataPerPage.map((post)=>{

    return(
    <button className={`${styles.post} col-xl-2 col-md-3 col-sm-5 card mt-3 mx-2 p-1 h-25`} onClick={()=>navigate(`details/${post.id}`)}>
      <div className="card-body row align-items-center text-center">
        <h5 className="card-title">{post.title}</h5>
      </div>
    </button>
    )}):
    <NoData/>}

  <nav aria-label="Page navigation example">
  <ul class="pagination mt-3">
    <li class="page-item">
      <a class="page-link" onClick={()=>{CurrentPageNum-1<1?'':setCurrentPageNum(CurrentPageNum-1)}} aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    

    {posts?.slice(0,NbPages).map((post,index)=>
    <li class="page-item"><a class="page-link" onClick={()=>setCurrentPageNum(index+1)}>{index+1}</a></li>
    )}

    <li class="page-item">
      <a class="page-link" onClick={()=>{CurrentPageNum+1>NbPages?'':setCurrentPageNum(CurrentPageNum+1)}} aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>

  </div>
  }
    </div>
  )
}