import styles from '../../styles/Components/Form.module.css';


function FormContainer({children}: {children : any}) {
  return (
    <div className={styles.formContainer}>
      {children}
    </div>
  )
}

export default FormContainer