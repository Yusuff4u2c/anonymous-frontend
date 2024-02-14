import Button from "../components/button";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const MAX_CHARACTER_COUNT = 545;

function NonUser({ username }) {
  return (
    <>
      <h1 className="text-4xl">Oops..!</h1>
      <p className="max-w-[40ch] text-center">
        There is no one with the username <b>{username}</b>. Try looking for any
        possible typos.
      </p>

      <p className="max-w-[40ch] text-center">
        Or, you can get started by registering with the username {username}{" "}
        right now. Tap on "Register Now" button!
      </p>

      <Link to={"/register"}>
        <Button type="submit">Register Now</Button>
      </Link>
      <p className="max-w-prose text-center text-[10px]">
        By using this service, you agree to our Privacy Policy, Terms of Service
        and any related policies.
      </p>

      <Link to={"/"}>
        <Button type="submit">Go to Homepage</Button>
      </Link>
    </>
  );
}

const MessageForm = () => {
  const { username } = useParams();
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const value = e.target.value;

    if (value.length <= MAX_CHARACTER_COUNT) {
      setMessage(value);
    }
  }

  async function handleMessageSubmission(e) {
    e.preventDefault();
    if (!message) return toast.error("Please say something!");
    if (message.length < 5)
      return toast.error("Your message should be 5 characters or more!");
    if (!user) return toast.error("Invalid action");

    try {
      setProcessing(true);
      const res = await fetch(`http://localhost:8000/message/${username}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      console.log(message);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      setMessage("");
      toast.success("Your response has been saved anonymously");
      navigate("/register?referrer=your-turn");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setProcessing(false);
    }
  }

  async function checkUser() {
    console.log(username);
    try {
      const res = await fetch(`http://localhost:8000/user/${username}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log(data.user);
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-4 p-10 my-4 rounded-2xl">
        {!user && <NonUser username={username} />}

        {user && (
          <>
            <h1 className="text-4xl">Say Something</h1>

            <form onSubmit={handleMessageSubmission}>
              <p className="text-sm">
                Say Something About Me <span className="text-[red]">*</span>
              </p>
              <textarea
                type="text"
                id="message"
                placeholder={`Leave a message for ${username} here..`}
                className="outline-none bg-transparent w-[400px] border-none"
                onChange={handleChange}
                value={message}
                rows={5}
              />
              <p className="pb-1 border-b-2">
                <span className="font-bold">
                  {MAX_CHARACTER_COUNT - message.length}
                </span>{" "}
                characters remaining
              </p>
              <Button type="submit" disabled={processing}>
                <div className="flex justify-center gap-3 items-center">
                  Send Message
                </div>
              </Button>
            </form>

            <p className="max-w-[45ch]">
              Say what do you think about {username} or Leave a feedback for
              {username} anonymously using the form above.. 🥰 Thank You!! 😍😊
            </p>

            <p className="max-w-[45ch]">
              Guide to write perfect Anonymous Messages by HushHive: With the
              help of our anonymous message sender named HushHive now, you can
              easily message your heart's desire to your friends, family
              members, and anyone you know who are on HushHive. We care about
              our users and thus we are suggesting what you may choose to tell
              them anonymously. Everyone in this world loves to get affection
              from their loved ones be it their parents, partners, or close
              friends. Tell them how much they matter to you and how much you
              care for them! These compliments will increase their positive
              feelings and they will feel your friendly love from the core of
              their heart. If you feel like there is something you do not like
              out of them, you may choose to constructively criticize them about
              it. That is completely fine and in fact when constructive
              criticism is delivered right, one can develop themselves
              accordingly to become a better person as a whole. Make sure to be
              on point with the criticism and make sure that it does not become
              an insult at the end. You may also choose to suggest things that
              will help them become a better person as a whole! Future
              predictions are tough, as shown by the available future
              predictions apps just like the love predictions! No one knows what
              is going to happen next. But, it is always good to be aware of
              your cons, focuses on your pros, and transforming your cons to
              your pros. That is exactly what good constructive criticism helps
              you achieve! We hope you liked this little guide on how you can
              write better anonymous messages which are going to be very
              productive. Don't forget to play by the rules, keep it clean out
              there. 😉
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default MessageForm;
