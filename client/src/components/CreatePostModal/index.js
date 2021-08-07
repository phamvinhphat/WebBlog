import { Modal } from "@material-ui/core";
import React from "react";
import {useSelector} from 'react-redux';
import {modalState$} from '../../redux/selectors';

export default function CreatePostModal(){
    const {isShow} = useSelector(modalState$);

    const body ='This is body modal';
   
    return (
        <div>
            <Modal open={isShow} onClose={{}}>
            {body}

            </Modal>

        </div>


    );


}