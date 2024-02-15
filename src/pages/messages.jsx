import { Link } from "react-router-dom";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaAngleDown,
} from "react-icons/fa";
import Button from "../components/button";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import dayjs from "dayjs";
import toast from "react-hot-toast";

const Btn = ({ className, title, ...others }) => {
  return (
    <div>
      <button
        {...others}
        type="button"
        className={`mt-4 w-full ${className} border text-sm border-[hsl(221,93%,40%)] rounded-full p-1 my-0 mx-auto bg-[#180620]`}
      >
        {title}
      </button>
    </div>
  );
};

function Messages() {
  const [paragraphVisibility, setParagraphVisibility] = useState(false);
  const { user } = useAuth();
  const [messageDetails, setMessageDetails] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  const fetchMessages = async () => {
    try {
      const user_id = user._id;
      const res = await fetch(
        `https://hushhive-v2.onrender.com/message/${user_id}?page=${page}&limit=${limit}`
      );
      const message = await res.json();
      setMessageDetails(message.data);
    } catch (error) {
      console.log("catch error: ", error.message);
    }
  };
  const handleViewMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    fetchMessages();
  }, [page]);

  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] w-[600px] leading-loose flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
        <h1 className="text-4xl">My Answers</h1>

        <p className="text-center">
          👇 Scroll 👇 down to check out the messages that you <br />
          have received
        </p>
        <div className=" flex flex-col pb-6 text-center">
          {messageDetails.map((message, index) => (
            <div
              key={index}
              className="border text-start my-3 border-[#5fdee2] p-5 rounded-xl"
            >
              <p className="font-bold">Message:</p>

              <div>
                <p>{message.message}</p>{" "}
                <p>
                  Anonymous -{" "}
                  {dayjs(message.created_at).format("DD MMM YYYY hh:mm A")}
                </p>
              </div>

              <Btn title="✨ Share Response ✨" />
              <Btn title="More Options" />
            </div>
          ))}

          <div className="border border-[#5fdee2] p-5 rounded-xl">
            <p>You Have Reached The End! 🏁</p>{" "}
            <p>
              🙋 Ask your friends to send more messages or view <br /> Archived
              Messaged
            </p>
          </div>

          <Button className="w-full mb-3" onClick={handleViewMore}>
            <div className="flex  justify-center gap-3 items-center">
              View More Answers <FaLongArrowAltRight />
            </div>
          </Button>
          <Link to="/home">
            <Button className=" w-full my-3">
              <div className="flex w-full justify-center gap-3 items-center">
                <FaLongArrowAltLeft /> Go Back
              </div>
            </Button>
          </Link>
          <Btn
            onClick={() => setParagraphVisibility(!paragraphVisibility)}
            title={
              <div className="flex w-full justify-center gap-3 items-center">
                HushHive Messages <FaAngleDown />
              </div>
            }
          />
          {paragraphVisibility && (
            <p className="text-start mt-6">
              HushHive is an interactive Dare Game, where you can compliment and
              get complimented by your friends, family and closed ones keeping
              the privacy of the users safe. One can only send you a private
              anonymous message in HushHive when he or she has your username. We
              recommend you share your unique profile link with everyone you
              love and care about. Not only them but you can also share the dare
              with everyone in your social media contact list and ask them to
              answer the dare. By doing this you will be able to know how people
              think about you in general. Ask your friends to join the platform
              and send their unique links too so that you can compliment them
              anonymously. Does not matter if you are shy to compliment someone
              or an introvert in general, you can always use the power of
              anonymity in front of everyone else on our platform and use it to
              send and receive anonymous compliments, and texts. Suggestions and
              Compliments received by your friends and acquaintances are to be
              taken on a positive note. Messages that you receive can be shared
              as a Status/Story using the "Share" button under the message, once
              you reach the share page you can follow the instructions and share
              the secret message that you received. You can archive a message by
              tapping on "Archive Message" under "More Options" below the
              message that you want to archive. In case, you think that you may
              have received an inappropriate message you can always choose to
              "report" the message. The reported secret message will be sent to
              the designated support team for review. If the message is found to
              be violating our terms and conditions, the message sender will be
              blocked from further accessing the system.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages;
