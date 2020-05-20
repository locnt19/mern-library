import React, { Component } from 'react';
import {
  Button,
  Modal, ModalBody, ModalHeader,
  Form, FormInput, FormGroup
} from 'shards-react';
import classnames from 'classnames';

class ModalSuaVaiTro extends Component {
  render() {
    const props = this.props;
    return (
      <Modal open={props.modalEdit} toggle={() => props.handleModal("modal_edit")} centered>
        <ModalHeader>Chỉnh sửa vai trò</ModalHeader>
        <ModalBody>
          <Form onSubmit={props.submitChinhSuaVaiTro}>
            <FormGroup>
              <label className="mb-0 w-100">
                <span>Mã vai trò</span>
                <FormInput
                  name="ma_vaitro"
                  value={props.ma_vaitro}
                  placeholder="Mã vai trò"
                  onChange={props.handleChange}
                  className={classnames(
                    props.ma_vaitro_error && "is-invalid"
                  )}
                  readOnly
                />
              </label>
              {
                props.ma_vaitro_error
                  ? <div className="invalid-feedback d-block">{props.ma_vaitro_error}</div>
                  : null
              }
            </FormGroup>
            <FormGroup>
              <label className="mb-0 w-100">
                <span>Tên vai trò</span>
                <FormInput
                  name="ten_vaitro"
                  value={props.ten_vaitro}
                  placeholder="Tên vai trò"
                  onChange={props.handleChange}
                  className={classnames(
                    props.ten_vaitro_error && "is-invalid"
                  )}
                />
              </label>
              {
                props.ten_vaitro_error
                  ? <div className="invalid-feedback d-block">{props.ten_vaitro_error}</div>
                  : null
              }
            </FormGroup>
            <div className="text-right">
              <Button>Chỉnh sửa</Button>
              <button type="button"
                onClick={() => props.handleModal("modal_edit")}
                className="btn btn-link text-decoration-none"
              >Đóng</button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default ModalSuaVaiTro;