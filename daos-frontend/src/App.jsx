import "./App.css";
import { isExpired } from "react-jwt";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import FindMusician from "./pages/FindMusician";
import Musician from "./pages/Musician";
import FindEnsemble from "./pages/FindEnsemble";
import Ensemble from "./pages/Ensemble";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ProfileChangePassword from "./pages/ProfileChangePassword";
import ProfileChangeNewsletterSettings from "./pages/ProfileChangeNewsletterSettings";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import AddInstrument from "./pages/AddInstrument";
import EditInstrument from "./pages/EditInstrument";
import CreateEnsemble from "./pages/CreateEnsemble";
import EditEnsemble from "./pages/EditEnsemble";
import AddEnsemblePost from "./pages/AddEnsemblePost";
import Footer from "./components/shared/Footer";
import EditEnsemblePost from "./pages/EditEnsemblePost";
import ProfileSettings from "./pages/ProfileSettings";
import LoggedOut from "./pages/LoggedOut";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {

    if (localStorage.getItem("token") == null && localStorage.getItem("profileId") == null) {
      setLoggedIn(false);
    } else if (localStorage.getItem("token") != "undefined" && localStorage.getItem("profileId") != "undefined") {
      
      if (isExpired(localStorage.getItem("token"))) {
        setLoggedIn(false);
      } else if (!isExpired(localStorage.getItem("token"))) {
        setLoggedIn(true);
      }
      
    } else {
      setLoggedIn(false);
    }

  }, [loggedIn]);

  return (
      <div>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          {loggedIn && <Route path="/musicians" element={<FindMusician />} />}
          {!loggedIn && <Route path="/musicians" element={<LoggedOut />} />}
          {loggedIn && <Route path="/musicians/:id" element={<Musician />} />}
          {!loggedIn && <Route path="/musicians/:id" element={<LoggedOut />} />}
          {loggedIn && <Route path="/ensembles" element={<FindEnsemble />} />}
          {!loggedIn && <Route path="/ensembles" element={<LoggedOut />} />}
          {loggedIn && <Route path="/ensembles/:id" element={<Ensemble />} />}
          {!loggedIn && <Route path="/ensembles/:id" element={<LoggedOut />} />}
          {loggedIn && <Route path="/ensembles/:id/posts/:postId" element={<Post />} />}
          {!loggedIn && <Route path="/ensembles/:id/posts/:postId" element={<LoggedOut />} />}
          {loggedIn && <Route path="/profile" element={<Profile />} />}
          {!loggedIn && <Route path="/profile" element={<LoggedOut />} />}
          {loggedIn && <Route path="/profile/edit" element={<EditProfile />} />}
          {!loggedIn && <Route path="/profile/edit" element={<LoggedOut />} />}
          {loggedIn && <Route path="/profile/settings" element={<ProfileSettings setLoggedIn={setLoggedIn} />} />}
          {!loggedIn && <Route path="/profile/settings" element={<LoggedOut />} />}
          {loggedIn && <Route path="/profile/settings/password" element={<ProfileChangePassword />} />}
          {!loggedIn && <Route path="/profile/settings/password" element={<LoggedOut />} />}
          {loggedIn && <Route path="/profile/settings/newsletter" element={<ProfileChangeNewsletterSettings />} />}
          {!loggedIn && <Route path="/profile/settings/newsletter" element={<LoggedOut />} />}
          <Route path="/sign-up" element={<SignUp setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          {loggedIn && <Route path="/welcome" element={<Welcome />} />}
          {!loggedIn && <Route path="/welcome" element={<LoggedOut />} />}
          {loggedIn && <Route path="/profile/instruments/add" element={<AddInstrument />} />}
          {!loggedIn && <Route path="/profile/instruments/add" element={<LoggedOut />} />}
          {loggedIn && <Route path="/profile/instruments/:id/edit" element={<EditInstrument />} />}
          {!loggedIn && <Route path="/profile/instruments/:id/edit" element={<LoggedOut />} />}
          {loggedIn && <Route path="/profile/ensembles/create" element={<CreateEnsemble />} />}
          {!loggedIn && <Route path="/profile/ensembles/create" element={<LoggedOut />} />}
          {loggedIn && <Route path="/profile/ensembles/:id/edit" element={<EditEnsemble />} />}
          {!loggedIn && <Route path="/profile/ensembles/:id/edit" element={<LoggedOut />} />}
          {loggedIn && <Route path="/profile/ensembles/:id/posts/add" element={<AddEnsemblePost />} />}
          {!loggedIn && <Route path="/profile/ensembles/:id/posts/add" element={<LoggedOut />} />}
          {loggedIn && <Route path="/profile/ensembles/:id/posts/:postid/edit" element={<EditEnsemblePost />} />}
          {!loggedIn && <Route path="/profile/ensembles/:id/posts/:postid/edit" element={<LoggedOut />} />}
        </Routes>
        <Footer />
      </div>
  );
}