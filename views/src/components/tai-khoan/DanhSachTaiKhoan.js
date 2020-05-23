import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

class DanhSachTaiKhoan extends Component {
  render() {
    const props = this.props;
    return (
      <div className='table-responsive-xl'>
        <table className='table table-hover mb-0'>
          <thead className='bg-light'>
            <tr>
              <th scope='col' className='border-0 text-center'>#</th>
              <th scope='col' className='border-0'>ID</th>
              <th scope='col' className='border-0'>Mật khẩu(deployment)</th>
              <th scope='col' className='border-0'>Vai trò</th>
              <th scope='col' className='border-0 text-center'>Tuỳ chọn</th>
            </tr>
          </thead>
          <tbody>
            {
              (props.danhSachTaiKhoan.length > 0) && props.danhSachTaiKhoan.map((item, index) => (
                <tr key={index}>
                  <th scope='row' className='text-center'>{index + 1}</th>
                  <td>{item.username}</td>
                  <td>{item.mat_khau}</td>
                  <td>{item.vai_tro}</td>
                  <td className='text-center'>
                    <button
                      className='btn btn-outline-primary'
                      onClick={() => props.getTaiKhoan(item, 'modal_edit')}>Sửa</button>
                    <button
                      className='btn btn-link'
                      onClick={()=> props.getTaiKhoan(item, 'modal_delete')}
                    >Xoá</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {(props.danhSachTaiKhoan.length <= 0) && <div className="px-4"><Skeleton count={1} /></div>}
      </div>
    );
  }
}

export default DanhSachTaiKhoan;