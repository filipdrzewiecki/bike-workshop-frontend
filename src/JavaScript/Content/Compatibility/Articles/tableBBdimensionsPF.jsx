import '../../../Css/index.css';
import React from 'react';

const TablePressFitBottomBracketDimensions = () => {
  return (
    <div>
      <table className="regularTable">
        <tr>
          <th>Nazwa standardu</th>
          <th>Szerokość mufy (mm)</th>
          <th>Średnica osi (mm)</th>
          <th>Średnica mufy (mm)</th>
        </tr>
        <tr>
          <td>PF30</td>
          <td>46</td>
          <td>--</td>
          <td>--</td>
        </tr>
        <tr>
          <td>BB30 (Canondale)</td>
          <td>42</td>
          <td>--</td>
          <td>--</td>
        </tr>
        <tr>
          <td>BB86</td>
          <td>41</td>
          <td>--</td>
          <td>--</td>
        </tr>
      </table>
    </div>
  );
}

export default TablePressFitBottomBracketDimensions;