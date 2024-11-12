import React from 'react'
import { FaCalendarAlt, FaCar, FaCarSide, FaChargingStation, FaCheckCircle, FaClipboardList, 
    FaCogs, FaDollarSign, FaGasPump, FaIndustry, FaMoneyBill, FaRoad, FaTag } from 'react-icons/fa'
    import { GiCarDoor } from "react-icons/gi";


const iconMap={
    FaClipboardList:<FaClipboardList />,
    FaTag:<FaTag/>,
    FaDollarSign:<FaDollarSign/>,
    FaMoneyBill:<FaMoneyBill/>,
    FaCar:<FaCar/>,
    FaCheckCircle:<FaCheckCircle/>,
    FaChargingStation:<FaChargingStation/>,
    FaIndustry:<FaIndustry/>,
    FaCarSide:<FaCarSide/>,
    FaCalendarAlt:<FaCalendarAlt/>,
    FaRoad:<FaRoad/>,
    FaCogs:<FaCogs/>,
    FaGasPump:<FaGasPump/>,
    GiCarDoor:<GiCarDoor/>
}

function IconField({icon}) {
  return (
    <div className='text-blue-600 bg-blue-100 p-1.5 rounded-full'>{iconMap[icon]}</div>
  )
}

export default IconField