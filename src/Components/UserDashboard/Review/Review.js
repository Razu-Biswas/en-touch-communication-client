import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

function Review() {
  const [reviewInfo, setReviewInfo] = useState({});
  const history = useHistory()
  const submitReview = async () => {
    const saveReview = await axios.post(`https://entouch-server.onrender.com/addSingleReview`, reviewInfo)
    console.log(saveReview)
    if (saveReview.data.userName) {
      history.push('/');
    }
  }
  return (
    <div className='w-50'>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Write A Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"
          onChange={(e) => setReviewInfo({ ...reviewInfo, userName: e.target.value })} />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea onChange={(e) => setReviewInfo({ ...reviewInfo, review: e.target.value })} class="form-control" id="exampleFormControlTextarea1" rows="3"> </textarea>
      </div>
      <div class="mb-3">

        <button className='btn btn-success' onClick={submitReview}>Submit</button>
      </div>
    </div >
  )
}

export default Review