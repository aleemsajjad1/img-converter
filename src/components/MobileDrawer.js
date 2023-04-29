import React from 'react'
import { Drawer } from 'antd'
const MobileDrawer = ({open,onClose,children}) => {
  return (
    <Drawer title="Mobile Menu" open={open} onClose={onClose} >
<div className="flex flex-col  py-3">
{children}
</div>
    </Drawer>
  )
}

export default MobileDrawer