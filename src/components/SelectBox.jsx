import React, { useRef } from 'react';

const SelectBox = (props) => {

    const { width } = props;

    const regionRef = useRef(null);

    const handleChange = () =>{

    }

   return (
       <select onChange={handleChange} ref={regionRef} style={{width: width + 'px'}} className="select-box" name="region" id="select-box">
           <option className="option" value="">seleccionar region</option>
       </select>
   );
}

export default SelectBox;