import React, { Component } from 'react';
import {
  Button,
  Modal, ModalBody, ModalHeader,
  Form, FormInput, FormSelect, FormGroup
} from 'shards-react';
import classnames from 'classnames';

class ModalSuaVaiTro extends Component {
  render() {
    const props = this.props;
    return (
      <Modal open={props.modalEdit} toggle={() => props.handleModal("modal_edit")} centered>
        <ModalHeader>Chỉnh sửa tài khoản</ModalHeader>
        <ModalBody>
          <Form onSubmit={props.submitChinhSuaVaiTro}>
            <FormGroup>
              <label className="mb-0 w-100">
                <span>Tài khoản</span>
                <FormInput
                  name="username"
                  value={props.username}
                  placeholder="Username"
                  onChange={props.handleChange}
                  className={classnames(
                    props.username_error && "is-invalid"
                  )}
                  readOnly
                />
              </label>
              {
                props.username_error
                  ? <div className="invalid-feedback d-block">{props.username_error}</div>
                  : null
              }
            </FormGroup>
            <FormGroup>
              <label className="mb-0 w-100">
                <span>Vai trò</span>
                <FormSelect>
                  {
                    (props.danhSachVaiTro.length > 0) && props.danhSachVaiTro.map((item, index) => (
                      <option key={index} value={item.ma_vaitro}>{item.ten_vaitro}</option>
                    ))
                  }
                </FormSelect>
              </label>
              {
                props.ten_vaitro_error
                  ? <div className="invalid-feedback d-block">{props.ten_vaitro_error}</div>
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