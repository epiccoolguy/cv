import { ComputerModern } from "@/lib/font";
import styles from "@/styles/paper.module.css";

type Props = {
  children?: React.ReactNode;
};

export default async function Paper(props: Props) {
  return (
    <div className={`${styles.paper} ${ComputerModern.className}`}>
      {props.children}
    </div>
  );
}
