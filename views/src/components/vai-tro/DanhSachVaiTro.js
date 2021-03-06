import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

class DanhSachVaiTro extends Component {
  render() {
    const props = this.props;
    return (
      <div className='table-responsive-xl'>
        <table className='table table-hover mb-0'>
          <thead className='bg-light'>
            <tr>
              <th scope='col' className='border-0 text-center'>#</th>
              <th scope='col' className='border-0'>ID</th>
              <th scope='col' className='border-0'>Vai trò</th>
              <th scope='col' className='border-0 text-center'>Tuỳ chọn</th>
            </tr>
          </thead>
          <tbody>
            {
              (props.danhSachVaiTro.length > 0) && props.danhSachVaiTro.map((item, index) => (
                <tr key={index}>
                  <th scope='row' className='text-center'>{index + 1}</th>
                  <td>{item.ma_vaitro}</td>
                  <td>{item.ten_vaitro}</td>
                  <td className='text-center'>
                    <button
                      className='btn btn-outline-primary'
                      onClick={() => props.getVaiTro(item, 'modal_edit')}>Sửa</button>
                    <button
                      className='btn btn-link'
                      onClick={()=> props.getVaiTro(item, 'modal_delete')}
                    >Xoá</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {(props.danhSachVaiTro.length <= 0) && <div className="px-4"><Skeleton count={1} /></div>}
      </div>
    );
  }
}

export default DanhSachVaiTro;