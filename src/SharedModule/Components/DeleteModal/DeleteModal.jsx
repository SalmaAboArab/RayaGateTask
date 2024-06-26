import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import deleteimg from "../../../assets/delete.png";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../Loading/Loading";
import { baseUrl } from "../../../Constants/Urls/Urls";
import { useNavigate } from "react-router-dom";

export default function DeleteModal({ id, closeDeleteModal }) {
  const [deleteShow, setDeleteShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const deleteHandleClose = () => {
    setDeleteShow(false);
    closeDeleteModal();
  };
  const navigate = useNavigate();

  const onSubmitDelete = async () => {
    setIsLoading(true);
    try {
      let response = await axios.delete(`${baseUrl}/${id}`);
      // console.log(response);
      deleteHandleClose();
      toast.success(`Post deleted succefully`);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
    //   console.log(error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <Modal show={deleteShow} onHide={deleteHandleClose} centered={true}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="my-3 mx-5">
          <div className="text-center">
            <img src={deleteimg} alt="trash" className="w-75" />
            <h5 className="fw-bold mt-2">Delete This Post ?</h5>
            <p>
              are you sure you want to delete this post ? if you are sure just
              click on delete it
            </p>
          </div>
          <div className="text-end pt-3 border-top">
            <button
              className="btn btn-outline-danger fw-bold  bg-danger text-white"
              onClick={onSubmitDelete}
            >
              {" "}
              {` Delete this post`}
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
