import DataRow from "@/components/data-row/data-row";
import Footer from "@/components/footer/footer";
import HeaderMini from "@/components/header-mini/header-mini";

const Historico = () => {
    return (
        <>
            <HeaderMini />
            <main>
                {/* Cabecalho com título */}    
                <table>
                    <DataRow />
                    <DataRow />
                    <DataRow />
                    <DataRow />
                    <DataRow />
                </table>
            </main>
            <Footer />
        </>
    )
}

export default Historico;