import '../../../Css/index.css';
import React from 'react';

const TableCassetteDimensions = () => {
    return (
      <div>
      <table className="regularTable">
      <tr>
       <td>Typ</td>
       <td>Szerokość kasety</td>
       <td>Szerokość bębenka</td>
     </tr>
       <td>Shimano 11</td>
       <td></td>
       <td>36.75</td>
     <tr>
       <td>Shimano 10</td>
       <td>34.9</td>
       <td>37.2</td>
     </tr>
     <tr>
       <td>Shimano 9</td>
       <td>36.5</td>
       <td></td>
     </tr>
     <tr>
       <td>Shimano 8/7/6</td>
       <td>35.4</td>
       <td></td>
     </tr>
    </table>
    </div>
    );
  }

  export default TableCassetteDimensions;