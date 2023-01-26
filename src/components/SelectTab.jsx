import { Box, styled, Tab, Tabs } from "@mui/material";
import React from "react";
import { useState,useContext } from "react";
import CreateJsonText from "./CreateJsonText";
import { DataContext } from "../context/DataProvider";
import CreateTable from "./CreateTable";


const Component= styled(Box)`
  margin-top:20px;
`
const Parts=styled(Tab)`
  text-transform:none;
  
`

export default function SelectTab() {
const[value,setValue]= useState(0);

const { paramData,setParamData,headerData,setHeaderData } = useContext(DataContext)

  const handleChange= (event,newValue)=>{
        setValue(newValue)
  }
  return (
    <Component>
            <Tabs value={value} onChange={handleChange}
            TabIndicatorProps={{ sx: { backgroundColor: "#F26B3A", height: 4, bottom: 2} }}
            textColor="none">
                <Parts label="Params" />
                <Parts label="Headers" />
                <Parts label="Body" />
            </Tabs>
            <Box
                role="tabpanel"
                hidden={value !== 0}
                id={`simple-tabpanel-${0}`}
                aria-labelledby={`simple-tab-${0}`}
            >
               <CreateTable text={'Query Params'} data={paramData} setData={setParamData} />
            </Box>
            <Box
                role="tabpanel"
                hidden={value !== 1}
                id={`simple-tabpanel-${1}`}
                aria-labelledby={`simple-tab-${1}`}
            >
                <CreateTable text={'Headers'} data={headerData} setData={setHeaderData} />
            </Box>
            <Box
                role="tabpanel"
                hidden={value !== 2}
                id={`simple-tabpanel-${2}`}
                aria-labelledby={`simple-tab-${2}`}
            >
                <CreateJsonText />
            </Box>
        </Component>
  );
}
