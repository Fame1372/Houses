"use client"
import ButtonGroop from "../../components/button-group/Button-group.component"
import InputIcon from "../../components/input"
import Layout from "../../components/layout"

export default function Home() {


  return (
     <Layout>
       <div className='input-search'>
        <InputIcon/> 
       </div>
       <div className='button-group'>
         <ButtonGroop/>
       </div>
     </Layout>

  )
}
