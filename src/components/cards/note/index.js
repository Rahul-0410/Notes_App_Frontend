// import React, { useState } from "react";
// import styles from "./note.module.scss";
// import { formatDate } from "../../../utils/formateDtae";

// function Note(props) {
//   const { text, date, color } = props;
//   const [expand, setExpand] = useState(false);
//   const [noteText, setNoteText] = useState("");
//   return (
//     <article className={styles.container} style={{ backgroundColor: color }}>
//       {/* <p>
//                 This is how a Note on Note.me looks like! 
//                 Very simple, clean and asthetic! 😍
//                 </p> */}
//       <div className={`${styles.content}`}>
//         {!text.length ? (
//           <textarea
//             value={noteText}
//             onChange={(e) => setNoteText(e.target.value)}
//           className={styles.textArea}/>
//         ) : (
//           <>
//             <p className={expand ? styles.expanded : ""}>{text}</p>
//             {text.length > 154 ? (
//               <button onClick={() => setExpand((prev) => !prev)}>
//                 read {expand ? "less" : "more"}
//               </button>
//             ) : null}
//           </>
//         )}
//       </div>

//       <footer className={styles.footer}>
//         {/* July, 07 2024 */}
//         {formatDate(date)}
//       </footer>
//     </article>
//   );
// }

// export default Note;

import React, {useState} from "react";
import styles from "./note.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { deleteTask } from "../../../apis/task-api";

function Note(props) {
  const { task, color } = props;
  const [expand, setExpand] = useState(false);

  const handleDeleteTask = async () => {
    try {
      console.log('Attempting to delete task with ID:', task._id);
      const result = await deleteTask(task._id);
      console.log('Task deleted:', result);
      // Handle successful deletion (e.g., update state, show a message)
      // You might want to call a function passed as a prop to update the parent component's state
      if (props.onDelete) {
        props.onDelete(task._id);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      // Handle error (e.g., show error message to user)
    }
  }

  return (
    <article className={styles.container} style={{ backgroundColor: color }}>
      <div className={`${styles.content}`}>
        <p className={expand ? styles.expanded : ""}>{task.description}</p>
        {task.description.length > 154 ? (
          <button onClick={() => setExpand((prev) => !prev)}>
            read {expand ? "less" : "more"}
          </button>
        ) : null}
      </div>
      <footer className={styles.footer}>
        {task.createdAt} 
        <Icon 
          onClick={handleDeleteTask} 
          icon={"material-symbols:delete-outline"}
          style={{ cursor: 'pointer' }}
        />
      </footer>
    </article>
  );
}

export default Note;


