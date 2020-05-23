import React from 'react';
import {
  Container, Row, Col,
  Card, CardHeader, CardBody,
  Button,
  Alert
} from 'shards-react';
import axios from 'axios';
import PageTitle from '../components/common/PageTitle';
import DanhSachTaiKhoan from '../components/tai-khoan/DanhSachTaiKhoan';
import ModalThemVaiTro from '../components/vai-tro/ModalThemVaiTro';
import ModalSuaTaiKhoan from '../components/tai-khoan/ModalSuaTaiKhoan';
import ModalXoaTaiKhoan from '../components/tai-khoan/ModalXoaTaiKhoan';
const initialTaiKhoan = {
  id_taikhoan: "",
  username: "",
  mat_khau: "",
  username_error: "",
  mat_khau_error: "",
}
const initialAlert = {
  alert_coundown: 0,
  alert_timeDismiss: 3,
}


class TaiKhoan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danhsach_taikhoan: [],
      danhsach_vaitro: [],
      modal_new: false,
      modal_edit: false,
      modal_delete: false,
      alert_visible: false,
      alert_theme: 'success',
      alert_notify: '',
      ...initialTaiKhoan,
      ...initialAlert,
    };

    this.intervalAlert = null;
  };

  // ALERT FUNCTION
  showAlert = () => {
    this.clearIntervalAlert();
    this.setState({ alert_visible: true, ...initialAlert });
    this.intervalAlert = setInterval(this.handleTimeChange, 1000);
  };

  handleTimeChange = () => {
    if (this.state.alert_coundown < this.state.alert_timeDismiss - 1) {
      this.setState({ alert_coundown: this.state.alert_coundown + 1 });
      return;
    };
    this.setState({ alert_visible: false });
    this.clearIntervalAlert();
  };

  clearIntervalAlert = () => {
    clearInterval(this.intervalAlert);
    this.intervalAlert = null;
  };
  // END ALERT FUNCTION


  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    })
  };

  handleModal = name => {
    if (name === 'modal_new') {
      this.setState({
        modal_new: !this.state.modal_new
      });
      if (this.state.modal_new === false) {
        this.setState({ ...initialTaiKhoan });
      };
    }
    if (name === 'modal_edit') {
      this.setState({
        modal_edit: !this.state.modal_edit
      });
    }
    if (name === 'modal_delete') {
      this.setState({
        modal_delete: !this.state.modal_delete
      });
    }
  };

  // validate = () => {
  //   const state = this.state;
  //   let ma_vaitro_error = "";
  //   let ten_vaitro_error = "";

  //   if (state.ma_vaitro.length === 0 || state.ma_vaitro.includes(' ')) {
  //     ma_vaitro_error = "Mã vai trò không được có ký tự trắng và để trống";
  //   }

  //   if (state.ten_vaitro.trim().length === 0) {
  //     ten_vaitro_error = "Tên vai trò không được để trống";
  //   }

  //   // ?????????????????????
  //   if (ma_vaitro_error || ten_vaitro_error) {
  //     this.setState({ ma_vaitro_error, ten_vaitro_error });
  //     return false;
  //   }

  //   return true;
  // };

  getTaiKhoan = (taikhoan, modalName) => {
    this.handleModal(modalName);
    this.setState({
      id_taikhoan: taikhoan._id,
      username: taikhoan.username,
      mat_khau: taikhoan.mat_khau
    });
  };


  // submitVaiTroMoi = event => {
  //   event.preventDefault();
  //   const isValid = this.validate();
  //   if (isValid) {
  //     axios.post('http://localhost:5000/api/vai-tro/', {
  //       ma_vaitro: this.state.ma_vaitro,
  //       ten_vaitro: this.state.ten_vaitro
  //     })
  //       .then(() => {
  //         this.loadDanhSachVaiTro();
  //         this.setState({
  //           modal_new: false,
  //           alert_notify: "Thêm mới thành công",
  //         });
  //         this.showAlert();
  //       })
  //       .catch(error => {
  //         this.setState({
  //           alert_notify: "Thêm mới thất bại, xin vui lòng thử lại",
  //           alert_theme: "danger"
  //         })
  //         this.showAlert();
  //         console.log(error);
  //       });
  //   }
  // };

  // submitChinhSuaVaiTro = event => {
  //   event.preventDefault();
  //   axios.put('http://localhost:5000/api/vai-tro/' + this.state.id_vaitro, {
  //     ma_vaitro: this.state.ma_vaitro,
  //     ten_vaitro: this.state.ten_vaitro
  //   })
  //     .then(() => {
  //       this.loadDanhSachVaiTro();
  //       this.setState({
  //         modal_edit: false,
  //         alert_notify: "Cập nhật thành công"
  //       });
  //       this.showAlert();
  //     })
  //     .catch(error => {
  //       this.setState({
  //         alert_notify: "Cập nhật thất bại, xin vui lòng thử lại",
  //         alert_theme: "danger"
  //       });
  //       this.showAlert();
  //       console.log(error);
  //     })
  // }

  submitXoaTaiKhoan = () => {
    axios.delete('http://localhost:5000/api/tai-khoan/' + this.state.id_taikhoan)
      .then(() => {
        this.loadDanhSachTaikhoan();
        this.setState({
          modal_delete: false,
          alert_notify: "Xoá thành công",
        });
        this.showAlert();
      })
      .catch(error => {
        this.setState({
          alert_notify: "Xoá thất bại, xin vui lòng thử lại",
          alert_theme: "danger"
        })
        this.showAlert();
        console.log(error);
      })
  }

  loadDanhSachTaikhoan = () => {
    axios.get('http://localhost:5000/api/tai-khoan').then(res => {
      this.setState({
        danhsach_taikhoan: res.data
      })
    }).catch(error => console.log(error));
  };


  getDanhSachVaiTro = () => {
    axios.get('http://localhost:5000/api/vai-tro').then(res => {
      this.setState({
        danhsach_vaitro: res.data
      })
    }).catch(error => console.log(error));
  };

  componentDidMount() {
    this.loadDanhSachTaikhoan();
    this.getDanhSachVaiTro();
  }

  render() {
    const state = this.state;
    return (
      <React.Fragment>
        {/* Notify actions */}
        <Alert className="admin-alert" open={this.state.alert_visible} theme={state.alert_theme}>
          {state.alert_notify}! Đóng trong {this.state.alert_timeDismiss - this.state.alert_coundown}s
        </Alert>

        <Container className='main-content-container px-4'>
          {/* Page Header */}
          <Row noGutters className='page-header py-4'>
            <PageTitle sm='4' title='Danh sách tài khoản' subtitle='Tài khoản' className='text-sm-left' />
          </Row>
          <Row>
            <Col xs={12}>
              <Card small className='mb-4'>
                <CardHeader className='border-bottom d-flex justify-content-between'>
                  <h6 className='m-0'>Danh sách tài khoản</h6>
                  <div>
                    <Button theme='primary' onClick={() => this.handleModal('modal_new')}>Tạo tài khoản mới</Button>
                  </div>
                </CardHeader>
                <CardBody className='p-0 pb-3'>
                  <DanhSachTaiKhoan
                    danhSachTaiKhoan={this.state.danhsach_taikhoan}
                    getTaiKhoan={this.getTaiKhoan}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <ModalThemVaiTro
            modalNew={state.modal_new}
            handleModal={this.handleModal}
            handleChange={this.handleChange}
            id_vaitro={state.id_vaitro}
            ma_vaitro={state.ma_vaitro}
            ten_vaitro={state.ten_vaitro}
            ten_vaitro_error={state.ten_vaitro_error}
            ma_vaitro_error={state.ma_vaitro_error}
            submitVaiTroMoi={this.submitVaiTroMoi}
          />
          <ModalSuaTaiKhoan
            modalEdit={state.modal_edit}
            handleModal={this.handleModal}
            handleChange={this.handleChange}
            danhSachVaiTro={state.danhsach_vaitro}
            username={state.username}
            ten_vaitro={state.ten_vaitro}
            ten_vaitro_error={state.ten_vaitro_error}
            ma_vaitro_error={state.ma_vaitro_error}
            submitChinhSuaVaiTro={this.submitChinhSuaVaiTro}
          />
          <ModalXoaTaiKhoan
            modalDelete={state.modal_delete}
            handleModal={this.handleModal}
            submitXoaTaiKhoan={this.submitXoaTaiKhoan}
            id_taikhoan={state.id_taikhoan}
            username={state.username}
          />
        </Container >
      </React.Fragment>
    )
  }
}

export default TaiKhoan;
