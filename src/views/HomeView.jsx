import Image from "next/image";

export default function HomeView() {
  return (
    <div className="home">
      <div className="home__image">
        <Image alt="home image" src="/pic.svg" fill />
      </div>
      <div className="home__description">
        <p className="home__text">
          Acredito na equidade dentro dos processos de design. Pensar não só no
          usuário que nasceu com acesso a tecnologia, como também em quem virá a
          ter ou nunca teve acesso algum.
        </p>
        <p className="home__text">
          Acredito que a acessibilidade faz diferença, traz inclusão e o
          sentimento de pertencimento ao usuário.
        </p>
        <p className="home__text">
          Acredito que juntar empatia, colaboração, curiosidade e entusiasmo
          transforma o processo do desenvolvimento no design.
        </p>
        <p className="home__text">
          E é por essa razão que me apaixonei pela área.
        </p>
      </div>
      <div className="home__links">
        <a rel="external" target="_blank" href="https://www.linkedin.com/in/karinaramos04/" className="home__link">linkedin</a>
        <a href="mailto:ux.karinar@gmail.com" className="home__link">gmail</a>
        <a rel="external" target="_blank" href="https://www.behance.net/karinaramos18" className="home__link">behance</a>
      </div>
    </div>
  );
}
