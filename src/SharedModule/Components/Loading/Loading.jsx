import React from 'react'

import {  ThreeDots, Watch } from 'react-loader-spinner'

export default function Loading({components}) {
  
  return <>

<div className=" loader mx-auto">
    <ThreeDots
        visible={true}
        height="35"
        width="5%"
        color="black"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
    />
</div>



  
  </>
}

