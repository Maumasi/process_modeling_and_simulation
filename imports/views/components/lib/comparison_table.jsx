import React from 'react';

const ComparisonTable = () => {
  return (
    <div>
      <table class="ui definition table">
        <thead>
          <tr><th></th>
            <th>Direct Mail Marketing</th>
            <th>Mobile App CLP</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Coupon Response Rate</td>
            <td>5.1%</td>
            <td>17%</td>
          </tr>
          <tr>
            <td>Customer Retention Rate</td>
            <td>4.53%</td>
            <td>15.13%</td>
          </tr>

          <tr>
            <td>Customer ROI Percent</td>
            <td>22.65% - 86.07%</td>
            <td>75.65% - 287.47% </td>
          </tr>
          <tr>
            <td>Initial Setup Costs</td>
            <td>$84.4K</td>
            <td>$200K</td>
          </tr>

          <tr>
            <td>Recurring Annual Costs</td>
            <td>$1.35M</td>
            <td>$46K</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export { ComparisonTable };
