import React from 'react';
import {Modal, ButtonToolbar} from 'rsuite';
import LazyLoad from 'react-lazy-load';
import './modal.css';

type CustomModalProps = {
  image: string;
};

export default function CustomModal(props: CustomModalProps): JSX.Element {
  const {image} = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ButtonToolbar>
      <div>
        <img
          src={image}
          alt="loading..."
          onClick={handleOpen}
          style={{width: '40%'}}
        />
      </div>
      <Modal open={open} onClose={handleClose} overflow={false} backdrop={true}>
        <Modal.Header />
        <Modal.Body style={{justifyContent: 'center'}}>
          <LazyLoad>
            <img
              src={image}
              alt="loading..."
              onClick={handleClose}
              style={{width: '60%', justifyContent: 'center'}}
            />
          </LazyLoad>
        </Modal.Body>
      </Modal>
    </ButtonToolbar>
  );
}
