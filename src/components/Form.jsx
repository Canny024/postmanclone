import {
  Box,
  Select,
  MenuItem,
  TextField,
  styled,
  Button,
} from "@mui/material";
import React,{ useContext } from "react";

import { DataContext } from "../context/DataProvider";

const Wrapper = styled(Box)`
  display: flex;
  alignitems: center;
  justify-content: space-between;
`;

const SelectBox = styled(Select)`
  width: 150px;
  height: 40px;
  background-color: #F6F6F6;
`;

const InputField = styled(TextField)`
  width: 100%;
  background: #F6F6F6;
`;

const SendButton = styled(Button)`
  width: 100;
  height: 40;
  margin-left: 5px;
`;
export default function Form({onSendClick}) {

  const {formData, setFormData}= useContext(DataContext);

  const handleChange = (e)=>{
    setFormData({...formData,type:e.target.value})
  }

  const onUrlChange = (e)=>{
    setFormData({...formData,url:e.target.value})
  }

   

  return (
    <Wrapper>
      <SelectBox
        value={formData.type}
        onChange={(e)=> handleChange(e)}
        label="POST"
       
      >
        <MenuItem value={"POST"}>POST</MenuItem>
        <MenuItem value={"GET"}>GET</MenuItem>
      </SelectBox>
      <InputField
        size="small"
        onChange={(e) => onUrlChange(e)}
      />
      <SendButton variant="contained"
      onClick={()=> onSendClick()}
      >Send
      </SendButton>
    </Wrapper>
  );
}
