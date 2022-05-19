// import { useEffect, useState } from 'react';
// import Button from '../Button';
// import SelectOption from '../SelectOption';
// import ParentElement from '../ParentElement';

// const TestComponents = props => {
//   const [brandlist, setBrandList] = useState([]);
//   const [valueOption, setValueOption] = useState();
//   const [error, setError] = useState();
//   const [disabled, setDisabled] = useState(false);

//   //
//   useEffect(() => {
//     fetch(`${process.env.APIURL}/api/currentapi`)
//       .then(res => res.json())
//       .then(item => setBrandList(item));
//   }, []);

//   const onSubmit = e => {
//     e.preventDefault();
//     if (valueOption && valueOption != 'Option that come from select list') {
//       props.triggerNextStep({ value: valueOption, trigger: 'BOT/triger-12' });
//       setDisabled(true);
//     }
//   };

//   const onChange = e => {
//     e.preventDefault();
//     setValueOption(e.target.value);
//     if (!e.target.value) {
//       setError('Error Message!');
//     } else {
//       setError(null);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <ParentElement>
//         <SelectOption name="selectList" id="selectList" onChange={onChange}>
//           <option value="" selected="selected" key={'default-' + 'default'}>
//             Option Value
//           </option>
//           {array.map((item, index) => {
//             return (
//               <option key={index} value={item}>
//                 {item}
//               </option>
//             );
//           })}
//         </SelectOption>
//         <Button disabled={disabled} type="submit">
//           Button
//         </Button>
//       </ParentElement>
//       <div style={{ marginLeft: '15px', marginTop: '2px', position: 'static', fontSize: '11px', color: '#D8000C' }}>{error}</div>
//     </form>
//   );
// };

// export default BrandList;
