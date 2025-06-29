import { Title } from "../components/Title/Title";
import { Layout } from "../components/Layout/Layout";
import { SetupBox } from "../components/Setup/SetupBox";

function Setup() {
  return (
    <Layout>
      <Title>Base de Dados</Title>

      <div className="w-full flex flex-col md:flex-row justify-between lg:justify-normal gap-4 mt-8">
        <SetupBox title="Equipamentos" />
        <SetupBox title="Fornecedoras" />
        <SetupBox title="Setores" />
      </div>
    </Layout>
  );
}

export default Setup;
