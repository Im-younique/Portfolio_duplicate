import { Icon, Spacer } from "../";

export default function Header({ ...props }) {
  return (
    <section className="header">
      <Spacer />
      <span>I'm younique</span>
      <Icon name="list" size={32} color="white" />
    </section>
  );
}