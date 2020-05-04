import React from "react";
import {
  Container, Row, Col,
  Card, CardHeader, CardBody,
  Button,
  Modal, ModalBody, ModalHeader,
  Form, FormInput, FormGroup
} from "shards-react";
import classnames from 'classnames';
import axios from 'axios';
import PageTitle from "../components/common/PageTitle";
// import TaoChucVu from '../components/chuc-vu/TaoChucVu';

const defaultStateForm = {
  ma_chucvu: '',
  ten_chucvu: '',
  ma_chucvu_valid: null,
  ma_chucvu_error: '',
  ten_chucvu_valid: null,
  ten_chucvu_error: ''
};

class VaiTro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danhsach_chucvu: [],
      open_modal: false,
      ...defaultStateForm
    }
  }

  loadDanhSachChucVu = () => {
    axios.get("http://localhost:5000/api/vai-tro").then(res => {
      this.setState({
        danhsach_chucvu: res.data
      })
    }).catch(error => console.log(error));
  }


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
      axios.post('http://localhost:5000/api/vai-tro', data).then(res => {
        alert('Tạo thành công !');
        this.clearForm();
        this.loadDanhSachChucVu();
      })
        .catch(err => {
          alert('Thêm thất bại !');
          console.log(err);
        });
    }
  }


  componentDidMount() {
    this.loadDanhSachChucVu();
  }


  render() {
    const { danhsach_chucvu } = this.state;
    const state = this.state;
    return (
      <Container className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Danh sách chức vụ" subtitle="Chức vụ" className="text-sm-left" />
        </Row>
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom d-flex justify-content-between">
                <h6 className="m-0">Danh sách chức vụ</h6>
                {/* <TaoChucVu /> */}
                <div>
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
                </div>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" width={'10%'} className="border-0">#</th>
                      <th scope="col" width={'30%'} className="border-0">ID</th>
                      <th scope="col" className="border-0">Chức vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (danhsach_chucvu.length > 0) && danhsach_chucvu.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td id={item._id}>{item.ma_vaitro}</td>
                          <td>{item.ten_vaitro}</td>
                        </tr>
                      ))
                    }
                    {(danhsach_chucvu.length <= 0) && <tr><td colSpan={3} className="text-center">Danh sách rỗng</td></tr>}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container >
    )
  }
}

export default VaiTro;
