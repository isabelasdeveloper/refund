import mike from "../assets/error-404.png";

export function Error404() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <section className="flex flex-1 justify-center items-center flex-col gap-8">
        <img src={mike} alt="" className="w-60" />
        <h1 className="font-bold uppercase text-3xl text-gray-100 text-center">
          Ops! Não encontramos essa página
        </h1>
        <h3 className="text-base text-gray-300 text-center">
          Acho que você escolheu a porta errada, não consegui dar uma olhada no
          que você está procurando 🥺
        </h3>
        <a
          href="/"
          className="p-4 pl-8 pr-8 bg-green-200 rounded-4xl text-white font-bold hover:bg-green-100 transition ease-linear"
        >
          Voltar ao início
        </a>
      </section>
    </div>
  );
}
