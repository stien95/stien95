import Link from "next/link";
import style from "@/styles/ProjectItem.module.css";
import Modal from "@/common/modal";
import MoreInformation from "./MoreInformation";
import { useState } from "react";
type Info = {
  chars?: string[];
  techs?: string[];
};

interface Props {
  title: string;
  description?: string;
  info?: Info;
  url?: string;
}
export default function ProjectItem({ title, description, info, url }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <section className={style.ProjectItem}>
      <span className={style.project_title}>{title}</span>
      {description ? (
        <p className={style.project_description}>{description}</p>
      ) : (
        <span className={`${style.project_description} ${style.nf_text}`}>
          This project has no description
        </span>
      )}
      <div className={style.final_content}>
      {info ? (
        <button onClick={handleClick} className={style.info_btn}>
          More information
        </button>
      ) : (
        <span className={style.nf_text}>
          The project has no more information
        </span>
      )}
      {url ? (
        <Link href={url} className={style.project_link} target="_BLANK">
          Link to the project
        </Link>
      ) : (
        <span className={`${style.project_link} ${style.nf_text}`}>
          Currently the project has no link
        </span>
      )}
      </div>
      {openModal && info && (
        <Modal setMenuToggle={setOpenModal}>
          <MoreInformation info={info} />
        </Modal>
      )}
    </section>
  );
}
