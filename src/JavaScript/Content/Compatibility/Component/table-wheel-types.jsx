import '../../../Css/index.css';
import './table.css';
import React from 'react';
import Road from '../../../../resources/icon/terrain/roadTerrain.PNG';
import Forest from '../../../../resources/icon/terrain/forestTerrain.PNG';
import Hill from '../../../../resources/icon/terrain/hillTerrain.PNG';
import Mountain from '../../../../resources/icon/terrain/mountainTerrain.PNG';


const TyreTypes = () => {
  return (
    <div>
      <table className="bar-table">
        <tr>
          <th>Piasta przrzednia</th>
          <th colspan="2"><img className="icon-table" src={Road} alt="Road" ></img></th>
          <th colspan="2"><img className="icon-table" src={Forest} alt="Forest" ></img></th>
          <th colspan="2"><img className="icon-table" src={Hill} alt="Hill" ></img></th>
          <th colspan="2"><img className="icon-table" src={Mountain} alt="Mountain" ></img></th>
        </tr>
        <tr>
          <td>100 x 9</td>
          <td className="full"></td>
          <td className="right"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>100 x 12</td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="right"></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>100 x 15</td>
          <td></td>
          <td></td>
          <td className="left"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="right"></td>
          <td></td>
        </tr>
        <tr>
          <td>110 x 15</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="left"></td>
          <td className="full"></td>
          <td className="full"></td>
        </tr>
        <tr>
          <th>Piasta Tylna</th>
          <th colspan="2"></th>
          <th colspan="2"></th>
          <th colspan="2"></th>
          <th colspan="2"></th>
        </tr>
        <tr>
          <td>130 x 9</td>
          <td className="full"></td>
          <td className="right"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>135 x 9</td>
          <td></td>
          <td></td>
          <td className="left"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="right"></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>142 x 12</td>
          <td></td>
          <td></td>
          <td></td>
          <td className="left"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
        </tr>
        <tr>
          <td>148 x 12</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="left"></td>
          <td className="full"></td>
        </tr>
        <tr>
          <th>Opony (mm)</th>
          <th colspan="2"></th>
          <th colspan="2"></th>
          <th colspan="2"></th>
          <th colspan="2"></th>
        </tr>
        <tr>
          <td>23-28</td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="right"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>31-47</td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="right"></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>50-57</td>
          <td></td>
          <td></td>
          <td className="left"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="right"></td>
        </tr>
        <tr>
          <td>60 +</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="left"></td>
          <td className="full"></td>
        </tr>



        <tr>
          <th>Obręcze (mm)</th>
          <th colspan="2"></th>
          <th colspan="2"></th>
          <th colspan="2"></th>
          <th colspan="2"></th>
        </tr>
        <tr>
          <td>13 - 19</td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="right"></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>19 - 25</td>
          <td></td>
          <td></td>
          <td className="left"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="right"></td>
          <td></td>
        </tr>
        <tr>
          <td>25 + </td>
          <td></td>
          <td></td>
          <td></td>
          <td className="left"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
          <td className="full"></td>
        </tr>
      </table>
    </div>
  );
}

export default TyreTypes;
