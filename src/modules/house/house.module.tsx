"use client"
import ButtonGroop from "../../components/button-group/Button-group.component"
import InputIcon from "../../components/input"
import Layout from "../../components/layout"
import DtaHouse from '../../components/house'

export default function Home() {


  return (
     <Layout>
       <div>
        <h3 className='title'> Houses </h3>
       </div>
       <div className='input-search'>
        <InputIcon/> 
       </div>
       <div className='button-group'>
         <ButtonGroop/>
       </div>
       <DtaHouse/>
       <DtaHouse/>
       <DtaHouse/>
       <DtaHouse/>
     </Layout>

  )
}
