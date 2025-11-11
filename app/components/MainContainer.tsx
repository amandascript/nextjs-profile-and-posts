import Footer from './Footer'
import NavBar from "./NavBar";
import {ReactNode} from 'react';
import '../../styles/maincontainer.css'

//define o tipo das props do componente
type MainContainerProps ={
  children: ReactNode;
};


export default function MainContainer({children}: MainContainerProps){
  return(
    <>
    <NavBar/>
    <div className='container'>{children}</div>
    <Footer/>
    </>
  )
}