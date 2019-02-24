import React from 'react';

const FiveYearPlanTable = () => {
  return (
    <div>
      <table class="ui definition table">
        <thead>
          <tr><th></th>
            <th>Current Pravice</th>
            <th>CLP App</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Data Volume Annually</td>
            <td>692.2K Records</td>
            <td>2.307M Records</td>
          </tr>
          <tr>
            <td>Data Availability Daily</td>
            <td>1,896.4 Records</td>
            <td>6,320.5 Records</td>
          </tr>

          <tr>
            <td>Cost Per Lead</td>
            <td>$7.75</td>
            <td>$0.88</td>
          </tr>
          <tr>
            <td>Sales Estimation Annually</td>
            <td>$1.209M</td>
            <td>$4.016M</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export { FiveYearPlanTable };
