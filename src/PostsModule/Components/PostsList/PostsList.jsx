import React, { useEffect, useState } from 'react'
import NoData from '../../../SharedModule/Components/NoData/NoData'
import Loading from '../../../SharedModule/Components/Loading/Loading'
import axios from 'axios';

export default function PostsList() {
  const [posts,setPosts]=useState([]);

  async function getAllPosts() {
    try {
      const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response?.data);
      setPosts(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllPosts();
  },[])
  return (
    <div className='bg-danger'>
      <div className="w-100 mx-auto">
  <div className="row mb-3 mb-sm-0">
    <div className="col-sm-2 card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <div className="col-sm-2 card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div className="col-sm-2 card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div className="col-sm-2 card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  </div>
</div>
    </div>
  )
}
