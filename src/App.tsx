import { Header } from "./components/Header";
import { Tela2 } from "./components/Tela2";
import { TelaPrincipal } from "./components/TelaPrincipal";
import { GlobalStyle } from "./styles/global";

export function App() {
    return (
    <> 
        <GlobalStyle />
        <Header />
        <TelaPrincipal />
        <Tela2 />
    </>
    );
}

