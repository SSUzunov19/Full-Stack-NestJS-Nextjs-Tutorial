import styles from '../src/styles/layout.module.css'

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>To Do</h1>
      {props.children}
    </div>
  )
}