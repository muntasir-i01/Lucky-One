import './Bonus.css'
import React from 'react';

const Bonus = () => {
    return (
        <div className='last'>
            <details>
  <summary>How does useState works?</summary>
  <p class = "bg-dark p-3">This is a hook that helps to keep state variables in functional components. By calling this inside a function components generates a single piece of state associated with the component. It is specially useful for local component state. Each piece of state holds a single value, which can be an object, an array, a boolean.  </p>
</details>

<details>
  <summary>Props vs State?</summary>
  <table class="table table-striped table-dark">
  <thead>
    <tr class="text-center">
      <th scope="col">Props</th>
      <th scope="col">State</th>      
    </tr>
  </thead>
  <tbody>
    <tr class="text-center">
      <td>Props are read only</td>
      <td>State changes can be aynchronous</td>      
    </tr>
    <tr class="text-center">
      <td>Props can not be modified</td>
      <td>State can be modified using setState</td>      
    </tr>
    <tr class="text-center">
      <td>Props are immutable</td>
      <td>State are mutable</td>      
    </tr>
    <tr class="text-center">
      <td>Passed in from parent</td>
      <td>Created within component</td>      
    </tr>
    <tr class="text-center">
      <td>Props make components reusable</td>
      <td>State can not make component reusable</td>      
    </tr>
     </tbody>
</table>
</details>
        </div>
    );
};

export default Bonus;