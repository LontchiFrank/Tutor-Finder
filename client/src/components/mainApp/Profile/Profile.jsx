import React, { useContext, useEffect, useState, createRef } from "react";
import AuthContext from "../../../context/auth/AuthContext";
import "../../ViewAllTutors/tutProfile.css";
import AllReviews from "../../ViewAllTutors/ViewAllReviews/AllReviews";
import FirstBox from "../../ViewAllTutors/FirstBox";
import Box2 from "../../ViewAllTutors/Box2";
import TutorProfileHeader from "../../ViewAllTutors/TutorProfileHeader";
import EditProfile from "../../EditProfile/EditProfile";
const PF = "http://localhost:5000/images/";

console.log(window.screen.height);

function App(props) {
  const authContext = useContext(AuthContext);
  const { ikeep, iStore, tutData, user, loadUser } = authContext;

  const [userData, setuserData] = useState();
  const [toggle, settoggle] = useState(0);
  const [headerHight, setheaderHight] = useState(10);

  const [modalState, setmodalState] = useState("none");

  const handleModal = () => {
    if (modalState === "none") {
      setmodalState("flex");
    } else {
      setmodalState("none");
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const setref = async (height) => {
    setheaderHight(parseInt(height));
  };
  useEffect(async () => {
    // if ((first = 2)) {
    //   // window.location.reload();
    // }
    await setuserData(user);
  }, [user]);

  useEffect(async () => {
    if (userData) {
      console.log(userData);

      settoggle(1);
    }
  }, [userData]);

  return (
    toggle === 1 && (
      <div
        className=" pt-3 pl-4 pr-4 pb-4"
        style={{ backgroundColor: "#f2f2f2", minHeight: "100vh" }}
      >
        <EditProfile
          user={user}
          modalStatus={modalState}
          handleModal={handleModal}
        />

        <TutorProfileHeader
          handleModal={handleModal}
          setref={setref}
          status={userData.status}
        />

        {userData.status === "tutor" ? (
          <div className="d-flex justify-content-between">
            <div className="" style={{ width: "29%", height: "85vh" }}>
              <FirstBox
                username={userData.username}
                speciality={userData.speciality}
                bio={userData.bio}
                profilePic={userData.profilePic}
                location={userData.location}
              />

              <Box2 email={userData.email} tel={userData.tel} />
            </div>

            <div className="" style={{ width: "70%", height: "83vh" }}>
              <div style={{ height: "80%" }} className="bg-white  rounded p-4">
                <p className="h3 text-warning mb-4">Reviews</p>
                <div
                  className="reviewArea"
                  style={{ height: "90%", overflowY: "auto" }}
                >
                  {/* <AllReviews tut_id={userData.id} /> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            id="bg_learner"
            style={{
              minHeight: `${window.innerHeight - 100}px`,
            }}
            className={`d-flex p-4 justify-content-center ${
              userData.status === "learner" && "bg_learner"
            }`}
          >
            <div
              className="align-self-center "
              style={{ width: "40%", minHeight: "90%" }}
            >
              <FirstBox
                status={userData.status}
                username={userData.username}
                speciality={userData.speciality}
                bio={userData.bio}
                profilePic={userData.profilePic}
                location={userData.location}
              />
              <Box2
                status={userData.status}
                tel={userData.tel}
                email={userData.email}
              />
            </div>
          </div>
        )}
      </div>
    )
  );
}

export default App;
