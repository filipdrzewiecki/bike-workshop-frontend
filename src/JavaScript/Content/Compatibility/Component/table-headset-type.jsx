import '../../../Css/index.css';
import React from 'react';

import ImageEC from '../../../../resources/headset/EC.jpg';
import ImageIS from '../../../../resources/headset/IS.jpg';
import ImageZS from '../../../../resources/headset/ZS.jpg';
import ImageThread from '../../../../resources/headset/Thread.jpg';

const TableHeadsetTypes = () => {
    return (
      <div>
        <table className="regularTable">
          <tr>
            <td>EC</td>
            <td>ZS</td>
            <td>IS</td>
            <td>EC thread</td>
          </tr>
          <tr>
            <td>A-HEAD</td>
            <td>Półzintegrowane</td>
            <td>Zintegrowane</td>
            <td>Gwintowane</td>
          </tr>
          <tr>
            <td><img className="photo-w-120" src={ImageEC} alt="ec"></img></td>
            <td><img className="photo-w-120" src={ImageZS} alt="zs"></img></td>
            <td><img className="photo-w-120" src={ImageIS} alt="ic"></img></td>
            <td><img className="photo-w-120" src={ImageThread} alt="thread"></img></td>
          </tr>
          
        </table>
      </div>
    );
  }

  export default TableHeadsetTypes;