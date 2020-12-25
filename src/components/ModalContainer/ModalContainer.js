import React from 'react';
import './ModalContainer.scss';
import {Modal} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function ModalContainer(props) {
    const {isOpenModal, closeModal, children } = props;

    // const drawerWidth = {
        
    //     '@media (max-width: 575.98px)' : {
    //       width: '98vw',
    //       height: '98vh'
    //     }
    //   }

    return (
        <Modal
            className='modal-container'
            open={isOpenModal}
            onClose={closeModal}
            closeAfterTransition
         
        >
        <div>{children}</div>
        </Modal>
    )
}