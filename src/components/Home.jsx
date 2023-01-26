import { Box, styled } from "@mui/material";
import { useState, useContext } from "react";

import React from "react";
import ErrorScreen from "./ErrorScreen";
import Form from "./Form";
import Header from "./Header";
import Response from "./Response";
import SelectTab from "./SelectTab";
import SnackBar from "./SnackBar";
import { DataContext } from "../context/DataProvider"; 
import { checkParams } from "../utils/common-utils";
import { getData } from "../service/api";
const Wrapper = styled(Box)`
  width: 60%;
  margin: 20px
   auto 0 auto;
`;

export default function Home() {

  const [error,setError]= useState(false);
  const [errorMsg,setErrorMsg]=useState('');
  const [errorResponse,setErrorResponse]=useState('');
  const [apiResponse,setApiResponse]=useState({});
  const { formData, jsonText, paramData, headerData}= useContext(DataContext);

  const onSendClick = async () =>{
    if(!checkParams(formData,jsonText,paramData,headerData,setErrorMsg)){
      setError(true);
      return false;
    }

   let response= await getData(formData, jsonText, paramData, headerData);

   if(response==='error'){
      setErrorResponse(true);
      return;
   }
   setErrorResponse(false);
   setApiResponse(response.data);
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Form onSendClick={onSendClick} />
        <SelectTab />
     
        {errorResponse ? <ErrorScreen /> : <Response data={apiResponse} />}
        { error && <SnackBar error={error} setError={setError} errorMsg={errorMsg} />}
      </Wrapper>
    </>
  );
}
