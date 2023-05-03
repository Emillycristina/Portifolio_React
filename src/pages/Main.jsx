import NavBar from "../componentes/NavBar/Navbar";
import Principal from "../componentes/Principal/Principal";
import Primeiro from "../componentes/Primeiro/Primeiro";
import Tecnologias from "../componentes/Tecnologias/Tecnologias";
import Contato from '../componentes/Contato/Contato';
import Footer from "../componentes/Footer/Footer";

export default function Main(){

    return(
     <div>
        <NavBar/>
        <Primeiro/>
        <Principal/>
        <Tecnologias/>
        <Contato />
        <Footer/>
     </div>


    )




}