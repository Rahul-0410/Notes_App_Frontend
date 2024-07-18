import React, { useState } from "react";
import styles from "./sidebar.module.scss";
import BrandLogo from "../brand";
import { Icon } from "@iconify/react/dist/iconify.js";
import sideData from "../../../data/sidebar.json";
import { useNavigate } from "react-router-dom";
// import utils from '../../../utils/localStorage'
// import { NOTES_DATA } from "../../../config/types";
import TaskPopup from "../../popup";
import { logOutUser } from "../../../apis/user-Api";

// home icon for sidebar.json
 // {
    //     "title": "Home",
    //     "icon": "carbon:home",
    //     "path": "/notes"
    // },

// console.log(sideData);

function SideBar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    // const handle= ()=>{
    //     if(item.path==='/notes' && item.icon==="ic:round-add"){
    //   //  let data =utils.getFromLocalStorage(NOTES_DATA)

    //   //  let updatedData = [{id: data.length+1, color: 'rgba(174,223,232,0.4)',
    //   //    text: "", createdAt: new Date().toISOString()},...data];
    //   //    utils.addToLocalStorage(NOTES_DATA,updatedData);
      
    // }
    //     }
    // }

    const handleLogout = async () => {
      try {
          await logOutUser();
          navigate('/'); // Navigate to the home page or login page after logout
      } catch (error) {
          console.error('Error logging out:', error);
      }
  };

    const handleSubmit = (description) => {
      // Handle the submitted task description here
      console.log('New task:', description);
    };

  const navigate = useNavigate();
  return (
    <aside className={styles.sidebar}>
      <BrandLogo logoOnly={true} type={"dark"} className={styles.logo} />
      <section>
        {sideData.map((item, index) => (
          <article key={index} className={styles.item}
          // onClick={()=>handleClick(item)}>
          onClick={() => setIsPopupOpen(true)}>
            <Icon
              icon={item.icon}
              color={"var(--white)"}
              // color={index == 1 ? "var(--light-gray)" : "var(--white)"}
            />
          </article>
        ))}
        <TaskPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSubmit={handleSubmit}
      />
      </section>
      <article className={styles.logout}>
        <Icon icon={"material-symbols:logout"} onClick={handleLogout} />
        {/* <Icon icon={"material-symbols:logout"} onClick={(e) => navigate("/")} /> */}
      </article>
    </aside>
  );
}

export default SideBar;
