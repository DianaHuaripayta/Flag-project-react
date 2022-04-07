import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setFilterByRegion } from '../../../features/listSlice';
const filterByRegionAction = (regionSelected: any) => {
  return {
    type: setFilterByRegion,
    payload: { regionSelected },
  };
}
export default function RadioButtonsGroup() {
  const dispatch = useAppDispatch()
  const filterByRegion = useAppSelector((state) => state.filterByRegion);

  const onRegionChange = (selectEvent: any) => {
    dispatch(filterByRegionAction(selectEvent));
  }
  console.log(filterByRegion, '//here')
 
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Regions</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="All"
        name="radio-buttons-group"
      >
        <FormControlLabel value="All" control={<Radio onClick={()=> onRegionChange('All')}/>} label="All" />
        <FormControlLabel value="Africa" control={<Radio onClick={()=> onRegionChange('Africa')}/>} label="Africa" />
        <FormControlLabel value="Americas" control={<Radio onClick={()=>onRegionChange('Americas')}/>} label="Americas" />
        <FormControlLabel value="Asia" control={<Radio onClick={()=>onRegionChange('Asia')}/>} label="Asia" />
        <FormControlLabel value="Europe" control={<Radio onClick={()=>onRegionChange('Europe')}/>} label="Europe" />
        <FormControlLabel value="Oceania" control={<Radio onClick={()=>onRegionChange('Oceania')}/>} label="Oceania" />
      </RadioGroup>
    </FormControl>
  );
}
