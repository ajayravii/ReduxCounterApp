import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment,decrement } from "./Reducer";

function App() {
  const value = useSelector(state1=>state1.counter1.value1)
  const dispatch = useDispatch()
  return (
 <Stack m={5}>
   <Stack pl={60}>
      <h1>Redux Counter App</h1>
   </Stack>
   <Stack pl={60} pr={97}>
      <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button onClick={()=>dispatch(increment())}>Increment</Button>
      <Button onClick={()=>dispatch(decrement())}>Decrement</Button>
      </ButtonGroup>
    </Stack>
    <Stack pl={65} pt={10}> 
     <Typography>Counter:</Typography>
     <Typography variant="h1">
        {value}
      </Typography></Stack>
   </Stack>
  );
}

export default App;
