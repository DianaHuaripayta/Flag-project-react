import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch, useSelector } from 'react-redux';
const filterByRegionAction =(regionSelected: any) => {
  return{
    type: 'FILTER_BY_REGION',
    payload: {regionSelected}
  };
}
export default function RadioButtonsGroup() {
  const dispatch = useDispatch();
  // const filterByRegion = useSelector((state) => state.filterByRegion)
  
  // const onRegionChange = (selectEvent) => {
  //   dispatch(filterByRegionAction(selectEvent));
  // }

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="Africa" control={<Radio />} label="Africa" />
        <FormControlLabel value="Americas" control={<Radio />} label="Americas" />
        <FormControlLabel value="Asia" control={<Radio />} label="Asia" />
        <FormControlLabel value="Europe" control={<Radio />} label="Europe" />
        <FormControlLabel value="Oceania" control={<Radio />} label="Oceania" />
      </RadioGroup>
    </FormControl>
  );
}
