import styles from './Item.module.css'

function Item(props) {
  return (
    <div className={styles.container}>
      <p className={`${styles.title} ${props.todo.isCompleted && styles.completed}`}>{props.todo.id}. {props.todo.title}</p>
      {!props.todo.isCompleted && (
        <button className={styles.button} onClick={() => props.handleCompleteTodo(props.todo.id)}>Concluir</button>
      )}
    </div>
  )
}

export default Item;