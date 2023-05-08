import { linkTo } from "@/helpers";
import Link from "next/link";
import { AccountSection } from "./AccountSection";

export function AccountPage({ user }) {
  return (
    <>
      <main className="account app-container d-flex row">
        <h2 className="page-title">{`Olá, ${user.nome}!`}</h2>

        <div className="account__content">
          <section className={`account-section`}>
            <AccountSection title="Meu cadastro" subtitle="Visualize suas informações pessoais e altere-as quando desejar:">
              <Link href={linkTo.usersData()}>Altere seus dados cadastrais</Link>
              <Link href={linkTo.usersAddresses()}>Veja seus endereços de entrega</Link>
              <Link href={linkTo.changeEmail()}>Altere seu e-mail</Link>
              <Link href={linkTo.changePassword()}>Altere sua senha</Link>
            </AccountSection>
          </section>

          <section className="account-section">
            <AccountSection title="Meus serviços" subtitle="Confira as facilidades que disponibilizamos para você:">
              <Link href={linkTo.treatment()}>Central de Atendimento</Link>
            </AccountSection>

            <AccountSection title="Meus pedidos" subtitle="Veja o histórico de compras e acompanhe seus pedidos:">
              <Link href={linkTo.myOrders('all')}>Acompanhe seus pedidos</Link>
              <Link href={linkTo.myOrders('billets')}>Imprimir a 2ª vida do boleto bancário</Link>
            </AccountSection>
          </section>
        </div>
      </main>
    </>
  )
}


