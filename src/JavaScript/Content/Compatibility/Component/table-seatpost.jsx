import './table.css';
import React from 'react';

const TableSeatposts = () => {
  return (
    <div>
      <table className="regularTable">
        <tr>
          <th>Średnica sztycy</th>
          <th>średnica ramy</th>
        </tr>
        <tr>
          <td>27.2</td>
          <td>31.8</td>
        </tr>
        <tr>
          <td>30.9</td>
          <td>34.9</td>
        </tr>
        <tr>
          <td>31.8</td>
          <td>34.9</td>
        </tr>
        <tr>
          <td>34.9</td>
          <td>38.2</td>
        </tr>
      </table>
    </div>
  );
}

export default TableSeatposts;