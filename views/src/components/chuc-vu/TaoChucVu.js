import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Button,
  Modal, ModalBody, ModalHeader,
  Form, FormInput, FormGroup
} from 'shards-react';
import axios from 'axios';

const defaultStateForm = {
  ma_chucvu: '',
  ten_chucvu: '',
  ma_chucvu_valid: null,
  ma_chucvu_error: '',
  ten_chucvu_valid: null,
  ten_chucvu_error: ''
}

class TaoChucVu extends Component {
  state = {
    open_modal: false,
    ...defaultStateForm
  };

  handleModal = () => {
    // console.log('handleModal run');
    this.setState({
      open_modal: !this.state.open_modal
    })
  }

  handleChangeInput = e => {
    // console.log('handleChangeInput run');
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleValidation = e => {
    // console.log('handleValidation run');
    const state = this.state;
    // console.log(e.target.name);
    switch (e.target.name) {
      case 'ma_chucvu':
        if (state.ma_chucvu.length === 0 || state.ma_chucvu.includes(' ')) {
          this.setState({
            ma_chucvu_error: 'Vui lòng nhập ít nhất 1 chữ cái và không có khoảng trắng',
            ma_chucvu_valid: false
          })
        } else {
          this.setState({
            ma_chucvu_valid: true
          })
        };
        break;
      case 'ten_chucvu':
        if (state.ten_chucvu.trim().length === 0) {
          this.setState({
            ten_chucvu_error: 'Vui lòng nhập tên chức vụ',
            ten_chucvu_valid: false
          })
        } else {
          this.setState({
            ten_chucvu_valid: true
          })
        };
        break;
      default: break;
    }
  }

  clearForm = () => {
    this.setState(defaultStateForm);
  }

  handleSubmit = e => {
    e.preventDefault();
    const state = this.state;
    if (state.ma_chucvu_valid === true && state.ten_chucvu_valid === true) {
      const data = {
        'ma_vaitro': state.ma_chucvu,
        'ten_vaitro': state.ten_chucvu
      };
      axios.post('http://localhost:5000/api/vai-tro', data)
        .then(res => {
          alert('Tạo thành công !');
          this.clearForm();
        })
        .catch(err => {
          alert('Thêm thất bại !');
          // console.log(err);
        });
    }
  }

  render() {
    const state = this.state;
    return (
      <React.Fragment>
        <Button theme='primary' onClick={this.handleModal}>Tạo chức vụ mới</Button>
        <Modal open={state.open_modal} toggle={this.handleModal} centered>
          <ModalHeader>Tạo chức vụ mới</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <label htmlFor='#ma_chucvu'>Mã chức vụ</label>
                <FormInput
                  id='#ma_chucvu'
                  name='ma_chucvu'
                  value={state.ma_chucvu}
                  onChange={this.handleChangeInput}
                  onBlur={this.handleValidation}
                  placeholder='Viết liền không dấu'
                  required
                  className={classnames(
                    state.ma_chucvu_valid && 'is-valid',
                    (state.ma_chucvu_valid === false) && 'is-invalid'
                  )}
                />
                {(state.ma_chucvu_valid === false) && <div className="invalid-feedback">{state.ma_chucvu_error}</div>}
              </FormGroup>
              <FormGroup>
                <label htmlFor='#ten_chucvu'>Tên chức vụ</label>
                <FormInput
                  id='#ten_chucvu'
                  name='ten_chucvu'
                  value={state.ten_chucvu}
                  onChange={this.handleChangeInput}
                  onBlur={this.handleValidation}
                  placeholder='Tên chức vụ'
                  required
                  className={classnames(
                    state.ten_chucvu_valid && 'is-valid',
                    (state.ten_chucvu_valid === false) && 'is-invalid'
                  )}
                />
                {(state.ten_chucvu_valid === false) && <div className="invalid-feedback">{state.ten_chucvu_error}</div>}
              </FormGroup>
              <div className='text-right'>
                <Button type='submit' theme='primary'>Tạo</Button>
                <button type='button' onClick={this.handleModal}
                  className='btn btn-link text-decoration-none'>Đóng</button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

TaoChucVu.propTypes = {

};

export default TaoChucVu;
