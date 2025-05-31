import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Montserrat, Nunito } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

// Animations
const ascend = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const burst = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7) rotate(-8deg);
  }
  60% {
    opacity: 1;
    transform: scale(1.1) rotate(2deg);
  }
  80% {
    transform: scale(0.95) rotate(-2deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: var(--font-nunito), sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  height: 80px;
  box-sizing: border-box;
  background: transparent;
  position: relative;
  z-index: 10;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #2c3e50;
  margin: 0;
  font-family: "Pacific Northwest Letters W01", sans-serif;
`;

const HandDrawnButton = styled.button`
  background: transparent;
  padding: 0rem 1rem;
  margin: 0 1rem;
  transition: all 0.5s ease;
  color: #41403e;
  font-size: 1.5rem;
  letter-spacing: 1px;
  outline: none;
  font-family: "Pacific Northwest Letters W01", cursive;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: solid 2px #41403e;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.3);
  }
`;

const Hero = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 80px);
  background: #f9f6f1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Fairy = styled.img`
  position: absolute;
  top: 30px;
  left: 40px;
  width: 120px;
  z-index: 2;
`;

const Train = styled.img`
  width: 220px;
  margin-top: 1.5em;
  display: block;
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const HeroImage = styled.img`
  width: 400px;
  max-width: 90vw;
  margin: -5em auto 0.01em auto;
  display: block;
  position: relative;
  z-index: 1;
`;

const AnimatedAscend = styled.div`
  animation: ${ascend} 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  opacity: 0;
  animation-delay: ${({ delay }) => delay || "0s"};
`;

const AnimatedBurst = styled.h1`
  font-family: "Pacific Northwest Letters W01", cursive;
  font-size: 3.4rem;
  color: #6b8e6b;
  margin: -0.4em 0 0 0;
  letter-spacing: 0.04em;
  text-align: center;
  position: relative;
  z-index: 2;
  opacity: 0;
  animation: ${burst} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: ${({ delay }) => delay || "0s"};
`;

const Section = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  text-align: left;
  color: #2c3e50;
  margin-bottom: 40px;
  font-family: "Pacific Northwest Letters W01", sans-serif;
  font-size: 2.5rem;
`;

const Accordion = styled.div`
  margin: 20px 0;
`;

const AccordionItem = styled.div`
  border: solid 2px #41403e;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  margin-bottom: 18px;
  background: #f0f6fa;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  overflow: hidden;
  transition: box-shadow 0.2s;
`;

const AccordionHeader = styled.div`
  padding: 18px 24px;
  background: #f0f6fa;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Pacific Northwest Letters W01", cursive;
  font-size: 1.35rem;
  color: #3a5a6b;
  transition: background 0.2s;
  border-bottom: 1px solid #b7d6e8;

  &:hover {
    background: #e3f0fa;
  }

  h3 {
    font-family: "Pacific Northwest Letters W01", cursive;
    font-size: 1.35rem;
    margin: 0;
    color: #3a5a6b;
    letter-spacing: 0.01em;
  }

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #b7d6e8;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    box-shadow: 0 1px 4px 0 rgba(120, 160, 200, 0.12);
    margin-left: 12px;
    transition: background 0.2s;
  }
`;

const AccordionDivider = styled.div`
  border-top: solid 2px #41403e;
  width: 100%;
  margin: 0;
`;

const AccordionContent = styled.div`
  padding: ${({ $isOpen }) => ($isOpen ? "18px 24px" : "0 24px")};
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  overflow: hidden;
  background: #f0f6fa;
  color: #3a5a6b;
  font-size: 1.08rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2vw;
  margin-top: 40px;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
  }
`;

const PolaroidFrame = styled.div`
  width: 280px;
  background: #fff;
  border: solid 2px #41403e;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  margin: 0 -10px;
  padding: 1rem 1rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.2s;

  @media (max-width: 700px) {
    width: 90vw;
    max-width: 400px;
    margin: 0 0 1.5em 0;
  }
`;

const PolaroidImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 12px 12px 8px 8px/12px 12px 8px 8px;
  margin-bottom: 0.5rem;
`;

const PolaroidCaption = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #41403e;
  margin: 0;
  font-family: "Nunito", sans-serif;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: solid 2px #41403e;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  background: #fff;
  font-size: 1rem;
  margin-bottom: 0.5em;
  box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.08);
  outline: none;
  transition: border-color 0.2s;
  &:focus {
    border-color: #7b4ca0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: solid 2px #41403e;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  background: #fff;
  font-size: 1rem;
  min-height: 150px;
  margin-bottom: 0.5em;
  box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.08);
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
  &:focus {
    border-color: #7b4ca0;
  }
`;

const SubmitButton = styled.button`
  background: transparent;
  color: #41403e;
  font-family: "Pacific Northwest Letters W01", cursive;
  font-size: 1.5rem;
  padding: 0.7rem 2rem;
  margin: 1.2em auto 0 auto;
  display: block;
  letter-spacing: 1px;
  outline: none;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: solid 2px #41403e;
  cursor: pointer;
  transition: box-shadow 0.2s, background 0.2s;
  &:hover {
    box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.3);
    background: #ecebe4;
  }
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 40px 0;
  text-align: center;
  margin-top: 40px;
`;

const ProfileSection = styled(Section)`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const ProfileImageFrame = styled.div`
  border: solid 2px #41403e;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  padding: 1rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  max-height: 460px;
  transform: rotate(-5deg);
  margin: 2rem;
`;

const ProfileImage = styled.img`
  width: 1500px;
  height: 400px;
  object-fit: cover;
  //border-radius: 50%;
  display: block;
`;

// Add SVG CurvedTextSVG component
const CurvedTextSVG = ({ text }) => (
  <svg
    width="100%"
    height="180"
    viewBox="0 0 500 180"
    style={{
      display: "block",
      margin: "-2.5em auto -5em auto",
      maxWidth: "90vw",
      position: "relative",
      zIndex: 3,
    }}
  >
    <defs>
      <path id="curve" d="M 50 160 Q 250 60 450 160" fill="transparent" />
    </defs>
    <text
      width="500"
      fontSize="48"
      fill="#e07a7a"
      fontFamily="'Pacific Northwest Letters W01', cursive"
    >
      <textPath href="#curve" startOffset="50%" textAnchor="middle">
        {text}
      </textPath>
    </text>
  </svg>
);

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
  }
`;

const AboutImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 400px; /* Fixed height to match text */
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Changed from contain to cover */
    border-radius: 20px;
  }

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 25px;
    z-index: -1;
  }
`;

export default function Home() {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const [showBurst, setShowBurst] = useState(false);

  const toggleAccordion = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowBurst(true), 800); // delay for burst
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Allerhand Tageskinder</title>
        <meta
          name="description"
          content="Kindertagesstätte in Hamburg - familiäre Betreuung und individuelle Förderung"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={`${montserrat.variable} ${nunito.variable}`}>
        <Header>
          <Logo>Allerhand Tageskinder</Logo>
          <HandDrawnButton>Kontakt</HandDrawnButton>
        </Header>

        <Hero>
          <Fairy src="/fairy.svg" alt="Fairy" />
          <HeroContent>
            <AnimatedAscend delay="0s">
              <CurvedTextSVG text="Willkommen bei" />
              <HeroImage src="/castle.svg" alt="Castle, bunny, blocks" />
            </AnimatedAscend>
            {showBurst && (
              <AnimatedBurst delay="0.1s">Allerhand Tageskinder</AnimatedBurst>
            )}
            <Train src="/train.svg" alt="Train" />
          </HeroContent>
        </Hero>

        <Section id="konzept">
          <img
            src="/Konzept.svg"
            alt="Das Konzept"
            style={{
              display: "block",
              margin: "0 0 16px 0",
              maxWidth: "180px",
              width: "100%",
            }}
          />
          <p>
            Erleben Sie unser pädagogisches Konzept, das auf familiärer
            Atmosphäre und individueller Förderung basiert. Unsere kleine Gruppe
            bietet den Kindern einen sicheren und liebevollen Start in die
            Zukunft – ganz wie in der eigenen Familie.
          </p>

          <Accordion>
            {[
              {
                title: "Kleine Gruppen und familiäres Umfeld",
                content:
                  "Maximal 5 Kinder und eine engagierte Tagesmutter ermöglichen ein enges, vertrauensvolles Miteinander.",
              },
              {
                title: "Frische, hausgemachte Mahzeiten",
                content:
                  "Täglich bereiten wir gesunde und abwechslungsreiche Speisen aus saisonalen, regionalen Zutaten zu. Frisch gekocht und liebevoll serviert, steht das leibliche Wohl der Kinder bei uns an erster Stelle.",
              },
              {
                title: "Zeit an der frischen Luft",
                content:
                  "Wir verbringen viel Zeit an der frischen Luft – sei es bei Spaziergängen, im nahegelegenen Park oder beim gemeinsamen Spielen im Freien. So wird nicht nur die körperliche Gesundheit gefördert, sondern auch der Entdeckergeist der Kinder geweckt.",
              },
              {
                title: "Freiraum zur Selbstentfaltung",
                content:
                  "Wir legen großen Wert darauf, dass die Kinder in ihrem eigenen Tempo lernen und wachsen dürfen. Freies Spiel und individuelle Aktivitäten stehen im Mittelpunkt, um die natürliche Neugier und Kreativität zu fördern.",
              },
            ].map((item, index) => (
              <AccordionItem key={index}>
                <AccordionHeader onClick={() => toggleAccordion(index)}>
                  <h3>{item.title}</h3>
                  <span>{accordionOpen === index ? "−" : "+"}</span>
                </AccordionHeader>
                <AccordionDivider />
                <AccordionContent $isOpen={accordionOpen === index}>
                  <p>{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        <Section id="raeumlichkeiten">
          <SectionTitle>Unsere Räumlichkeiten</SectionTitle>
          <Gallery>
            {[1, 2, 3, 4].map((num, idx) => (
              <PolaroidFrame
                key={num}
                style={{ transform: `rotate(${[-7, 0, 8, -4][idx]}deg)` }}
              >
                <PolaroidImage
                  src={`/placeholder-${num}.png`}
                  alt={`Räumlichkeit ${num}`}
                />
                <PolaroidCaption>Räumlichkeit {num}</PolaroidCaption>
              </PolaroidFrame>
            ))}
          </Gallery>
        </Section>

        <ProfileSection id="ueber-mich">
          <ProfileImageFrame>
            <ProfileImage src="/profile.png" alt="Martina Pfeifer" />
          </ProfileImageFrame>
          <div>
            <SectionTitle>Über mich</SectionTitle>
            <p>
              Mein Name ist Martina Pfeifer, Jahrgang 1965. Schon im Alter von
              13 Jahren habe ich meine erste Erfahrung in der Kinderbetreuung
              gesammelt – damals habe ich mit großer Freude auf jüngere Kinder
              in der Nachbarschaft aufgepasst. Diese frühe Begeisterung für die
              Arbeit mit Kindern hat mich nie losgelassen.
            </p>
            <p>
              Als ich später selbst Mutter wurde, entdeckte ich in der Tätigkeit
              als Tagesmutter eine wunderbare Möglichkeit, meine Familie und
              meine Berufung miteinander zu verbinden. Die Kombination aus
              pädagogischer Verantwortung und einem familiären Umfeld hat mich
              überzeugt – und erfüllt mich bis heute.
            </p>
            <p>
              Auch wenn meine eigenen Kinder inzwischen längst erwachsen und
              ausgezogen sind, ist meine Leidenschaft für die liebevolle
              Betreuung der Kleinsten geblieben. Mit meiner Ausbildung als
              Erzieherin und vielen Jahren praktischer Erfahrung schaffe ich für
              die mir anvertrauten Kinder einen geschützten Raum voller Wärme,
              Sicherheit und Geborgenheit – einen Ort, an dem sie sich frei
              entfalten und spielerisch die Welt entdecken können.
            </p>
          </div>
        </ProfileSection>

        <Section id="kontakt">
          <SectionTitle>Nimm Kontakt auf</SectionTitle>
          <p>
            Hast du Interesse an einem Betreuungsplatz oder hast du einfach nur
            Fragen? Fülle gerne das Formular aus oder melde dich direkt – ich
            werde mich in Kürze bei dir melden. Ich freue mich schon darauf, von
            euch zu hören.
          </p>
          <ContactForm>
            <FormGroup>
              <Input type="text" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Input type="email" placeholder="E-Mail" />
            </FormGroup>
            <FormGroup>
              <TextArea placeholder="Deine Nachricht" />
            </FormGroup>
            <SubmitButton type="submit">Nachricht senden</SubmitButton>
          </ContactForm>
        </Section>

        <Footer>
          <h3>Allerhand Tageskinder</h3>
          <p>Semperstraße 18, 22303 Hamburg</p>
          <p>E-Mail: kontakt@allerhandtageskinder.de</p>
        </Footer>
      </Container>
    </>
  );
}
