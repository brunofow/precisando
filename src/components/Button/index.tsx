import styles from '../../styles/Components/Button.module.css';


type Props = {
  children: React.ReactNode;
  size?: string;
  color?: string;
  type?: string;
}

function ButtonComponent({children, size, color, type}: Props) {


  let sizeClass = ''
  let colorClass = '';

  switch (size) {
    case 'small':
      sizeClass = `${styles.small}`
      break;
    case 'medium':
      sizeClass = `${styles.medium}`
      break;
    case 'large':
      sizeClass = `${styles.large}`
      break;
    default:
      break;
  }

  switch (color) {
    case 'primary':
      colorClass = `${styles.primary}`
      break;
    case 'white':
      colorClass = `${styles.white}`
      break;
    case 'secondary':
      colorClass = `${styles.secondary}`
    default:
      break;
  }

  return (
    <button className={`${styles.button} ${sizeClass} ${colorClass}`} type={type} >{children}</button>
  )
}

export default ButtonComponent