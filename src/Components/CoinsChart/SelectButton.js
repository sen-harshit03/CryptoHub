import { Button } from '@chakra-ui/react'
import React from 'react'

const SelectButton = ({children, selected, onClick}) => {
  return (
    <Button variant={"solid"} bg={"#B3B6B7"}
    border={selected ? "#3182ce" : ""}
     onClick={onClick}
     
     cursor={"pointer"}
    >{children}</Button>
  )
}

export default SelectButton