import React, { Component } from 'react';
import {
  Button,
  Modal, ModalBody, ModalHeader, ModalFooter
} from 'shards-react';

class ModalXoaVaiTro extends Component {
  render() {
    const props = this.props;
    return (
      <Modal open={props.modalDelete} toggle={() => props.handleModal("modal_delete")} centered>
        <ModalHeader>Xoá vai trò</ModalHeader>
        <ModalBody>
          <p className="mb-2">Xoá vai trò <span className="font-weight-bold">{props.ma_vaitro}</span>? Hành động này sẽ xoá vai trò vĩnh viễn trên hệ thống.</p>
          <p className="mb-0">Hành động này không thể hoàn tác.</p>
        </ModalBody>
        <ModalFooter>
          <div className="text-right">
            <Button theme="danger"
              onClick={()=> props.submitXoaVaiTro()}
            >Xác nhận</Button>
            <button type="button"
              onClick={() => props.handleModal("modal_delete")}
              className="btn btn-link text-decoration-none"
            >Đóng</button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalXoaVaiTro;