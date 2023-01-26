import React,{useState} from "react";
import { TableCell,TableRow, styled, Checkbox , TextField} from "@mui/material";


const Cells= styled(TableCell)`
        padding: 7px 5px;
        border: 1px solid rgba(224, 224, 224, 1);
        border-collapse: collapse;
`

const Checker= styled(Checkbox)`
    padding:2px 5px;

`

export default function AddRow({addRows,rowId,data,setData}) {

  const[checkCheckbox,setCheckCheckbox]= useState(false);

    const handelChange=(e) => {

      let result=data.filter(entry=> entry.id=== Number(e.target.name))[0];
      
        if(!checkCheckbox){
          addRows(oldArr=> [...oldArr,rowId])
          result={ ...result,id:rowId, check:true}
          setCheckCheckbox(true);
        }else{
          setCheckCheckbox(false);
          result= { ...result, id: rowId,check:false};
        }


        let index = data.findIndex(value => value.id===Number(e.target.name));

      if(index=== -1){
        setData(oldArr=> [ ...oldArr, result]);
      }else{
        const newArray=Object.assign([...data],{
          [index]:result
        })
        setData(newArray);
      }
       
    }

    const onTextChange=(e)=>{
    

      let result=data.filter(entry=> entry.id===rowId)[0];
      result={ ...result, id:rowId,[e.target.name]: e.target.value};

      let index = data.findIndex(value => value.id===rowId);

      if(index=== -1){
        setData(oldArr=> [ ...oldArr, result]);
      }else{
        const newArray=Object.assign([...data],{
          [index]:result
        })
        setData(newArray);
      }
      console.log(data);
    }
  return (
    <TableRow>
      <Cells><Checker
      checked={checkCheckbox}
       onChange={(e)=> handelChange(e)}
        name={rowId}
       />
       </Cells>
      <Cells>
        <TextField style={{width:'100%'}} inputProps={{ style: { height: 30, padding: '0 5px' } }}
          onChange={(e)=>onTextChange(e)} name="key"
        />
      </Cells>
      <Cells>
        <TextField style={{width:'100%'}} inputProps={{ style: { height: 30, padding: '0 5px' } }} 
          onChange={(e)=>onTextChange(e)} name="value"
        />
      </Cells>
    </TableRow>
  );
}
