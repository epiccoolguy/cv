import type { Dictionary } from "@/lib/dictionary";
import styles from "@/styles/main.module.css";

type MainProps = Omit<Dictionary, "author" | "title">;

async function ContactInfoList(props: {
  contact: MainProps["contact"];
  headings: MainProps["headings"];
}) {
  type ContactField = keyof typeof props.contact;

  const { contact, headings } = props;
  const { phone, email, github, linkedin } = contact;

  const links: Record<ContactField, string> = {
    email: `mailto:${email}`,
    phone: `tel:${phone}`,
    github: `https://github.com/${github}`,
    linkedin: `https://www.linkedin.com/in/${linkedin}/`,
  };

  return (
    <ul className={styles.ulRow}>
      {(Object.entries(contact) as [ContactField, string][]).map(
        ([key, value], index) => (
          <li key={index}>
            <strong>{headings[key]}</strong>:
            <p>
              <u>
                <a href={links[key]}>{value}</a>
              </u>
            </p>
          </li>
        )
      )}
    </ul>
  );
}

export default async function Main(props: MainProps) {
  const {
    headings,
    introduction,
    experience,
    projects,
    contact,
    skills,
    education,
    languages,
    competitions,
    interests,
  } = props;

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <ContactInfoList contact={contact} headings={headings} />
      </section>

      <section className={styles.section}>
        <h3>
          <strong>{headings.introduction}</strong>
        </h3>
        <p>{introduction}</p>
      </section>

      <section className={styles.section}>
        <h3>
          <strong>{headings.experience}</strong>
        </h3>
        {experience.map((item, index) => (
          <section className={styles.section} key={index}>
            <h4>
              <strong>{item.title}</strong>
            </h4>
            <p>
              {item.company} ({item.period})
            </p>
            <ul className={styles.ul}>
              {item.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </section>

      <section className={styles.section}>
        <h3>
          <strong>{headings.skills}</strong>
        </h3>
        <ul className={`${styles.ul} columns-3`}>
          {skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h3>
          <strong>{headings.projects}</strong>
        </h3>
        {projects.map((item, index) => (
          <section className={styles.section} key={index}>
            <h4>
              <strong>
                {item.href ? (
                  <u>
                    <a href={item.href}>{item.name}</a>
                  </u>
                ) : (
                  item.name
                )}
              </strong>
            </h4>
            <p>
              {item.company} ({item.period})
            </p>
            {item.description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </section>
        ))}
      </section>

      <div className="flex">
        <section className={`${styles.section} ${styles.left}`}>
          <h3>
            <strong>{headings.education}</strong>
          </h3>
          <ul className={styles.ul}>
            {education.map((item, index) => (
              <li className="break-inside-avoid-column" key={index}>
                <p>
                  <strong>{item.title}</strong>
                  <br />
                  {item.institute}
                  <br />
                  Minor: {item.minor}
                  <br />
                  {item.period}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section className={`${styles.section} flex-grow`}>
          <h3>
            <strong>{headings.competitions}</strong>
          </h3>
          <ul className={styles.ul}>
            {competitions.map((item, index) => (
              <li key={index}>
                <p>
                  <strong>
                    {item.name} {item.period}
                  </strong>
                  <br />
                  {item.position}
                  <br />
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section className={`${styles.section} ${styles.right}`}>
          <h3>
            <strong>{headings.languages}</strong>
          </h3>
          <ul className={styles.ul}>
            {languages.map((item, index) => (
              <li className="break-inside-avoid-column" key={index}>
                {item.name} ({item.level})
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
