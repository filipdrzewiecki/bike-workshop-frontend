import '../../../Css/index.css';
import './table.css';
import React from 'react';


const HubDimensions = () => {
    return (
        <div>
            <table className="regularTable">
                <tr>
                    <td>typ</td>
                    <td>przeznaczenie</td>
                    <td>Szerokość</td>
                    <td>Wymiar osi</td>
                </tr>
                <tr>
                    <th colspan="3">Przód</th>
                </tr>
                <tr>
                    <td>Standard QR</td>
                    <td>rower</td>
                    <td>100 mm</td>
                    <td>9 mm</td>
                </tr>
                <tr>
                    <td>Szosa sztywna oś</td>
                    <td>rower</td>
                    <td>100 mm</td>
                    <td>12mm</td>
                </tr>
                <tr>
                    <td>MTB sztywna oś</td>
                    <td>rower</td>
                    <td>100 mm</td>
                    <td>15mm</td>
                </tr>
                <tr>
                    <td>MTB BOOST</td>
                    <td>rower</td>
                    <td>110 mm</td>
                    <td>15 mm</td>
                </tr>

                <tr>
                    <th colspan="3">Tył</th>
                </tr>
                <tr>
                    <td>Standard QR</td>
                    <td>rower</td>
                    <td>135 mm</td>
                    <td>9 mm</td>
                </tr>
                <tr>
                    <td>MTB BOOST</td>
                    <td>rower</td>
                    <td>142 mm</td>
                    <td>12 mm</td>
                </tr>
                <tr>
                    <td>SUPER BOOST</td>
                    <td>rower</td>
                    <td>148 mm</td>
                    <td>12 mm</td>
                </tr>
                <tr>
                    <td>Szosa QR</td>
                    <td>rower</td>
                    <td>130 mm</td>
                    <td>9 mm</td>
                </tr>
                <tr>
                    <td>Szosa sztywna oś</td>
                    <td>rower</td>
                    <td>130 mm</td>
                    <td>12 mm</td>
                </tr>
                
                
                
            </table>
        </div>
    );
}

export default HubDimensions;
