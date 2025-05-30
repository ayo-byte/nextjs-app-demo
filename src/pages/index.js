import styled from "styled-components";
import { useState } from "react";
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
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #2c3e50;
  margin: 0;
  font-family: "Pacific Northwest Letters W01", sans-serif;
`;

const ContactButton = styled.button`
  background-color: #e67e22;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d35400;
  }
`;

const Hero = styled.section`
  position: relative;
  width: 100vw;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f6f1;
  overflow: hidden;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const HeroImage = styled.img`
  width: 320px;
  max-width: 60vw;
  margin-bottom: 1.5em;
`;

const MainTitle = styled.h1`
  font-family: "Pacific Northwest Letters W01", cursive;
  font-size: 3.2rem;
  color: #6b8e6b;
  margin: 0;
  letter-spacing: 0.04em;
  text-align: center;
`;

const Section = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
  font-family: "Pacific Northwest Letters W01", sans-serif;
`;

const Accordion = styled.div`
  margin: 20px 0;
`;

const AccordionItem = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const AccordionHeader = styled.div`
  padding: 15px;
  background-color: #f8f9fa;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionContent = styled.div`
  padding: ${(props) => (props.$isOpen ? "15px" : "0 15px")};
  max-height: ${(props) => (props.$isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
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
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #e67e22;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d35400;
  }
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 40px 0;
  text-align: center;
  margin-top: 40px;
`;

// Add SVG CurvedTextSVG component
const CurvedTextSVG = ({ text }) => (
  <svg
    width="500"
    height="120"
    viewBox="0 0 500 120"
    style={{ display: "block", margin: "0 auto" }}
  >
    <defs>
      <path id="curve" d="M 50 100 Q 250 0 450 100" fill="transparent" />
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

export default function Home() {
  const [accordionOpen, setAccordionOpen] = useState(null);

  const toggleAccordion = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

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
          <ContactButton>Kontakt</ContactButton>
        </Header>

        <Hero>
          <Fairy src="/fairy.png" alt="Fairy" />
          <HeroContent>
            <CurvedTextSVG text="Willkommen bei" />
            <HeroImage src="/castle.png" alt="Castle, bunny, blocks" />
            <MainTitle>Allerhand Tageskinder</MainTitle>
            <Train src="/train.png" alt="Train" />
          </HeroContent>
        </Hero>

        <Section id="konzept">
          <SectionTitle>Das Konzept</SectionTitle>
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
            {[1, 2, 3, 4].map((num) => (
              <GalleryImage
                key={num}
                src={`/placeholder-${num}.jpg`}
                alt={`Räumlichkeit ${num}`}
              />
            ))}
          </Gallery>
        </Section>

        <Section id="ueber-mich">
          <SectionTitle>Über mich</SectionTitle>
          <p>
            Mein Name ist Martina Pfeifer, Jahrgang 1965. Schon im Alter von 13
            Jahren habe ich meine erste Erfahrung in der Kinderbetreuung
            gesammelt – damals habe ich mit großer Freude auf jüngere Kinder in
            der Nachbarschaft aufgepasst. Diese frühe Begeisterung für die
            Arbeit mit Kindern hat mich nie losgelassen.
          </p>
          <p>
            Als ich später selbst Mutter wurde, entdeckte ich in der Tätigkeit
            als Tagesmutter eine wunderbare Möglichkeit, meine Familie und meine
            Berufung miteinander zu verbinden. Die Kombination aus pädagogischer
            Verantwortung und einem familiären Umfeld hat mich überzeugt – und
            erfüllt mich bis heute.
          </p>
          <p>
            Auch wenn meine eigenen Kinder inzwischen längst erwachsen und
            ausgezogen sind, ist meine Leidenschaft für die liebevolle Betreuung
            der Kleinsten geblieben. Mit meiner Ausbildung als Erzieherin und
            vielen Jahren praktischer Erfahrung schaffe ich für die mir
            anvertrauten Kinder einen geschützten Raum voller Wärme, Sicherheit
            und Geborgenheit – einen Ort, an dem sie sich frei entfalten und
            spielerisch die Welt entdecken können.
          </p>
        </Section>

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
