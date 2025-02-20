import styles from './button.atom.module.css';

export const Button: React.FC<{ text: string }> = ({ text }) => {
  return <button className={styles['custom-button']}>{text}</button>;
};