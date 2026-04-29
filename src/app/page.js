"use client";
import React from "react";

export default function NossoTempero() {
  const pratos = [
    { nome: "Frango à Parmegiana (G) COMPLETA", preco: "R$ 24,00", tag: "Caseiro", antigo: "R$ 30,00" },
    { nome: "Frango à Milanesa (G) COMPLETA", preco: "R$ 24,00", tag: "Queridinho dos Clientes", antigo: "R$ 30,00" },
  ];

  const [tempo, setTempo] = React.useState("");
  const [ativo, setAtivo] = React.useState(true);

  React.useEffect(() => {
    const atualizar = () => {
      const agora = new Date();

      const dia = agora.getDay(); // 0 = domingo, 6 = sábado
      const hora = agora.getHours();

      const ehDiaUtil = dia >= 1 && dia <= 5;
      const dentroHorario = hora >= 12 && hora < 15;

      if (ehDiaUtil && dentroHorario) {
        setAtivo(true);

        const alvo = new Date();
        alvo.setHours(15, 0, 0, 0);

        const diff = alvo - agora;

        const horas = Math.floor(diff / (1000 * 60 * 60));
        const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diff % (1000 * 60)) / 1000);

        setTempo(
          `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`
        );
      } else {
        setAtivo(false);
        setTempo("00:00:00");
      }
    };

    atualizar();
    const interval = setInterval(atualizar, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth">

     
  {/* CONTADOR VISUAL */}
      <div className="bg-black text-white text-center py-3 text-xl font-black tracking-widest shadow-lg">
        {ativo ? (
          <>⏰ PROMOÇÃO TERMINA EM: <span className="text-yellow-400">{tempo}</span></>
        ) : (
          <>⛔ PROMOÇÃO ENCERRADA (volta amanhã 12h)</>
        )}
      </div>

      {/* BOTÃO FLUTUANTE */}
      <a
        href="https://wa.me/5522988435501"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl font-black animate-bounce"
      >
        WhatsApp
      </a>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Nosso Tempero"
                className="w-16 h-16 rounded-full object-cover border-4 border-yellow-400 shadow-xl animate-pulse"
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
            </div>

            <div>
              <h1 className="text-3xl font-black text-red-600 leading-none">
                Nosso Tempero
              </h1>
              <p className="text-sm text-gray-500 font-medium">
                Cabo Frio • Delivery • Self-Service
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5522988435501"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg transition"
          >
            Pedir Agora
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-10 bg-[url('/logo.png')] bg-center bg-no-repeat bg-contain"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-8 md:p-16 items-center relative z-10">

          <div>
            <span className="bg-white text-red-600 px-4 py-2 rounded-full font-bold inline-block mb-4">
              Self-Service sem Balança
            </span>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Comida boa e preço justo em Cabo Frio
            </h2>

            <p className="mt-5 text-xl text-orange-100">
              Refeições caseiras, marmitas e pratos especiais todos os dias.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <span className="bg-white/20 px-4 py-2 rounded-full font-bold">
                ⭐ 4.9 Avaliação
              </span>

              <span className="bg-white/20 px-4 py-2 rounded-full font-bold">
                🚚 Entrega Rápida
              </span>
            </div>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="https://wa.me/5522988435501"
                target="_blank"
                className="bg-green-500 px-8 py-4 rounded-2xl font-black text-lg shadow-lg hover:scale-105 transition"
              >
                WhatsApp
              </a>

              <a
                href="#cardapio"
                className="bg-white text-red-600 px-8 py-4 rounded-2xl font-black text-lg shadow-lg hover:scale-105 transition"
              >
                Ver Cardápio
              </a>
            </div>
          </div>

          <div className="relative group">
            <img
              src="/premium.png"
              alt="Prato Premium"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-white object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-full font-black shadow-2xl text-lg animate-bounce border-4 border-white">
              🔥 MAIS PEDIDO 🔥
            </div>
          </div>

        </div>
      </section>

      {/* PROMO ESCOLA */}
      <section className="max-w-6xl mx-auto p-8">
        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-3xl p-8 shadow-2xl text-center">
          <h2 className="text-4xl font-black">🎓 PROMOÇÃO ESTUDANTE, SOMENTE DE SEGUNDA A SEXTA, DE 12:00 até 15:00</h2>
          <p className="mt-3 text-xl">
            Alunos da Escola Domingos Sávio ganham <span className="font-black text-yellow-300">GUARAVITA</span> em qualquer marmita!
          </p>
          <p className="mt-2 text-sm opacity-80">
            Mostrando que é estudante da EDS na hora do pedido
          </p>
        </div>
      </section>

      {/* TAMANHOS COM PROMO */}
      <div className="grid md:grid-cols-3 gap-6 text-center p-8">

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-bold">Quentinha Pequena</h3>
          <p className="text-gray-400 line-through">R$ 21,00</p>
          <p className="text-3xl font-black text-red-600">R$ 17,00</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow border-2 border-yellow-400 scale-105">
          <h3 className="text-xl font-bold">Quentinha Média</h3>
          <p className="text-gray-400 line-through">R$ 25,00</p>
          <p className="text-3xl font-black text-red-600">R$ 20,00</p>
          <span className="text-yellow-600 font-bold">MAIS PEDIDA</span>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-bold">Quentinha Grande</h3>
          <p className="text-gray-400 line-through">R$ 30,00</p>
          <p className="text-3xl font-black text-red-600">R$ 24,00</p>
        </div>

      </div>

      {/* CARDÁPIO */}
      <section id="cardapio" className="max-w-6xl mx-auto p-8">

        <div className="grid md:grid-cols-2 gap-6">
          {pratos.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-6 flex justify-between items-center gap-4 hover:scale-105 transition border border-gray-100 relative"
            >

              <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded-full shadow">
                PROMOÇÃO
              </div>

              <div>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">
                  {item.tag}
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {item.nome}
                </h3>

                <p className="text-gray-400 line-through mt-2">
                  {item.antigo}
                </p>

                <p className="text-red-600 font-black text-3xl">
                  {item.preco}
                </p>
              </div>

              <a
                href="https://wa.me/5522988435501"
                target="_blank"
                className="bg-red-600 text-white px-5 py-3 rounded-xl font-bold shadow hover:bg-red-700 transition"
              >
                Comprar
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER COMPLETO */}
      <footer className="bg-black text-white text-center p-8">
        <img
          src="/logo.png"
          alt="Nosso Tempero"
          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-yellow-400"
        />

        <p className="text-xl font-bold">Nosso Tempero</p>

        <p className="mt-2">
          Seg a Sex 11h às 15h • Sab 11h às 14h
        </p>

        <p className="mt-2">
          Av. Teixeira e Souza, 2228 Loja B
        </p>

        <p className="mt-2">
          Cabo Frio - RJ
        </p>
      </footer>

    </main>
  );
}