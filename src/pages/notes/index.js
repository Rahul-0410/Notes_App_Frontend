// import React, { useEffect, useState } from 'react'
// import styles from "./notes.module.scss"
// import Wrapper from '../../components/hoc/wrapper';
// import Greetings from '../../components/atoms/greetings';
// import Note from '../../components/cards/note';
// import notesData from "../../data/notes.json"
// import utils from '../../utils/localStorage';
// import { NOTES_DATA } from '../../config/types';

// function Notes() {
//   const [notesCol, setNotesCol] = useState([]);
//   const Data= utils.getFromLocalStorage(NOTES_DATA);
//   // useEffect(()=>{
//   //   // console.log({Data});
//   //   if(Data && Data.length){
//   //     setNotesCol(Data);
//   //     return;
//   //   }
//   //   // to prevent an empty screen first time
//   //   utils.addToLocalStorage(NOTES_DATA,notesData);
//   //   setNotesCol(notesData);
    
//   // },[Data])

//   return (
//    <section className={styles.container}>
//    <Greetings/>

//    <main>
//     {/* <Note/> */}
//     {
//       notesCol.map((note)=> <Note
//        key={note.id} text={note.text} color={note.color} date={note.createdAt}/>)
//     }
//    </main>
//    </section>
//   )
// }

// export default Wrapper( Notes);

import React, { useEffect, useState } from 'react';
import styles from "./notes.module.scss";
import Wrapper from '../../components/hoc/wrapper';
import Greetings from '../../components/atoms/greetings';
import Note from '../../components/cards/note';
import { getTaskForCurrentUser } from '../../apis/task-api';

const getRandomColor = () => {
  const colors = [
    "rgba(251, 235, 149,0.4)",
    "rgba(151, 210, 188,0.4)",
    "rgba(253, 186, 163,0.4)",
    "rgba(182, 165, 203,0.4)",
    "rgba(174, 223, 232, 0.6)"
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

function Notes() {
  const [notesCol, setNotesCol] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    fetchTasks();
    const id = setInterval(fetchTasks, 3000); 
    setIntervalId(id);

    return () => clearInterval(id); 
  }, []);

  const fetchTasks = async () => {
    try {
      const tasks = await getTaskForCurrentUser();
      const tasksWithColors = tasks.map(task => ({
        ...task,
        color: getRandomColor()
      }));
      setNotesCol(tasksWithColors);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } 
  };

  const handleTaskDeleted = (deletedTaskId) => {
    setNotesCol(prevNotes => prevNotes.filter(note => note._id !== deletedTaskId));
  };

  return (
    <section className={styles.container}>
      <Greetings />

      <main>
        {
          notesCol.map((note) => (
            <Note
              key={note._id}
              task={note}
              color={note.color}
              onDelete={handleTaskDeleted}
            />
          ))
        }
      </main>
    </section>
  );
}

export default Wrapper(Notes);



