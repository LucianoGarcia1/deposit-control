import { Title } from "../components/Title/Title";
import { Layout } from "../components/Layout/Layout";
import { SetupBox } from "../components/Setup/SetupBox";

function Setup() {
  return (
    <Layout>
      <Title>Base de Dados</Title>

      <div className="w-full flex flex-col sm:flex-row justify-between lg:justify-normal lg:gap-8  mt-4">
        <SetupBox title="Equipamentos" />
        <SetupBox title="Fornecedora" />
        <SetupBox title="Setores" />
      </div>
    </Layout>
  );
}

export default Setup;
