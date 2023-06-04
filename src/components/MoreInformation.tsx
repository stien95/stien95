import styles from "@/styles/MoreInformation.module.css";
import Image from "next/image";
type Info = {
  chars?: string[];
  techs?: string[];
};

interface Props {
  info: Info;
}
export default function MoreInformation({ info }: Props) {
  return (
    <div className={styles.MoreInformation}>
      <h3>Information</h3>
      {info.chars && (
        <details>
          <summary>Characteristics</summary>
          <ul>
            {info.chars.map((char) => (
              <li key={char}>{char}</li>
            ))}
          </ul>
        </details>
      )}
      {info.techs && (
        <details>
          <summary>Technologies</summary>
          <ul>
            {info.techs.map((tech) => (
              <li key={tech}>
                {tech}
                <Image
                  src={`/${tech.toLowerCase()}.svg`}
                  alt={tech}
                  width={32}
                  height={32}
                />
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
