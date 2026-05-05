import { formatarPreco } from "@/utils/formatacao";
import { strict } from "assert";

type Dados =
{
  dataAlteracao: string;
  nomeAnterior: string;
  precoAnterior: number;
}

const DataRow = ({dataAlteracao, nomeAnterior, precoAnterior} : Dados) => {
  return (
    <tr>
      <td>{dataAlteracao}</td>
      <td>{nomeAnterior}</td>
      <td>{formatarPreco(precoAnterior)}</td>
    </tr>
  )
}

export default DataRow;