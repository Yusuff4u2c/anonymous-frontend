import { Outlet, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Footer from "./components/footer";
import Registration from "./pages/registration";
import Login from "./pages/log-in";
import Settings from "./pages/settings";
import Home from "./pages/home";
import Messages from "./pages/messages";
import UpdatePassword from "./pages/update-password";
import UpdateEmail from "./pages/update-email";
import Disclaimer from "./pages/disclaimer";
import { AppProvider } from "./contexts/AppContext";
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./pages/forgot-password";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/protected-route";
import MessageForm from "./pages/message-form";
import AuthRoute from "./components/auth-route";
import VerifyEmail from "./pages/verify-email";
import EmailVerificationProtection from "./components/email-verification-protection";
import AwaitVerification from "./pages/await-verification";
import VerifyEmailPrompt from "./pages/verify-email-prompt";
import EmailVerified from "./pages/email-verified";
import NotFound from "./pages/not-found";

function App() {
  function Layout() {
    return (
      <>
        <Outlet />
        <Footer />
      </>
    );
  }
  return (
    <>
      <AppProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route element={<Layout />}>
              <Route
                path="/login"
                element={
                  <AuthRoute>
                    <Login />
                  </AuthRoute>
                }
              />
              <Route
                path="/forgotpassword"
                element={
                  <AuthRoute>
                    <ForgotPassword />
                  </AuthRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <AuthRoute>
                    <Registration />
                  </AuthRoute>
                }
              />
              <Route
                path="/verify-email-prompt"
                element={<VerifyEmailPrompt />}
              />
              <Route path="/*" element={<NotFound />} />
              <Route path="/email-verified" element={<EmailVerified />} />
              <Route path="/verify-email/:token" element={<VerifyEmail />} />
              <Route
                path="/await-verification/:email"
                element={<AwaitVerification />}
              />
              <Route path="/:username" element={<MessageForm />} />
              <Route element={<ProtectedRoute />}>
                <Route element={<EmailVerificationProtection />}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/update-email" element={<UpdateEmail />} />
                  <Route path="/update-password" element={<UpdatePassword />} />
                </Route>
              </Route>
              <Route path="/disclaimer" element={<Disclaimer />} />
            </Route>
          </Routes>
        </AuthProvider>
      </AppProvider>
      <Toaster />
    </>
  );
}

export default App;
