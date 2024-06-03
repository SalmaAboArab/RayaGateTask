import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../Constants/Urls/Urls';
import { Title } from '../../../SharedModule/Components/Title/Title';
import styles from './PostDetails.module.css'
import DeleteModal from '../../../SharedModule/Components/DeleteModal/DeleteModal';
import Loading from '../../../SharedModule/Components/Loading/Loading';
import NoData from '../../../SharedModule/Components/NoData/NoData';
import { toast } from 'react-toastify';

export default function PostDetails() {
  // getpost => posts?userId=1
  // getcomments => posts/1/comments
  const [post,setPost]=useState([]);
  const [comments,setComments]=useState([]);
  const [isLoading,setIsLoading]=useState(true);

  async function getPostDetails() {
    // setIsLoading(true);
    try {
      const response=await axios.get(`${baseUrl}/1`)
      // console.log(response?.data);
      setPost(response?.data);
    } catch (error) {
      // console.log(error);
      toast.error('Somthing went wrong!');
    }
    setIsLoading(false);
  }
  
  async function getPostComments() {
    // setIsLoading(true);
    try {
      const response=await axios.get(`${baseUrl}/1/comments`)
      // console.log(response?.data);
      setComments(response?.data);
    } catch (error) {
      // console.log(error);
      toast.error('Somthing went wrong!');
    }
    setIsLoading(false);
  }

  useEffect(()=>{
    getPostDetails();
    getPostComments();
  },[])

  const [openDeleteModal,setOpenDeleteModal]=useState(false)
const closeModal=()=>{
    setOpenDeleteModal(false);
    // setOpenViewModal(false);
  }
  return (
    <div className='w-100 vh-100 p-5'>
      <Title title={'Post Details'}/>

      {
        isLoading?<Loading/>:
        post?
        <div className="row vh-100">
      <div className="details col-md-8 mx-auto border rounded my-5 p-4">
        
        <div className="post mb-5 pb-5 pt-4 border-bottom border-3">
        <div className="d-flex justify-content-between">
        <h3 className='mb-5'>{post.title}</h3>
        <div className="dropdown mt-2">
                      <button className="btn border-0 fa fa-ellipsis-h" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                      <ul className="dropdown-menu rounded-4 py-1 px-1">
                        {/* <li><button className='btn btn-outline-light w-100 text-start border-0 text-black' onClick={()=>{localStorage.setItem("recipeId",recipe.id);navigate(`/dashboard/recipesform/Update`);}}><i className='fa fa-edit me-2'></i>Edit</button></li> */}
                        <li><button className='btn btn-outline-light w-100 text-start border-0 text-black' onClick={()=>setOpenDeleteModal(true)}><i className='fa fa-trash me-2'></i>Delete</button></li>
                      </ul>
                    </div>
        </div>
        <p className=''>{post.body}</p>
        </div>

        <div className="comments">
          <h3 className='mb-5'>Comments</h3>
        {comments.map((comment)=>
        <div>
          <h5 className='ms-3 mb-3'>
            <i className='fa fa-user-circle me-3'></i>
            {comment.name}</h5>
        <div className={`${styles.comment} w-75 p-3 mb-4 rounded-4 border ms-5`}>
          
          <p>{comment.body}</p>
        </div>
        </div>
        )}
      </div>
      </div>
      
      
      </div>:<NoData/>
      }
    {openDeleteModal&&<DeleteModal id={post.id} closeDeleteModal={closeModal}/>}
    </div>
  )
}
