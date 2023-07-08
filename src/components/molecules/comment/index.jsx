import { useEffect, useState } from "react";
import Select from "react-select";
import LottiePlayer from "components/atoms/lottie";
import { lottie } from "assets/image";
import StyledButton from "components/atoms/button/styledButton";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "lib/firebaseInit";
import "./custom.scss";
import dayjs from "dayjs";
import { random } from "lodash";

const options = [
  { value: "YES", label: "Hadir", emoji: "🎉" },
  { value: "NO", label: "Tidak hadir", emoji: "😢" },
  { value: "MAYBE", label: "Masih ragu", emoji: "🤔" },
];

const CommentSection = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      userId: 1,
      name: "Ichwan Arif Pratama",
      comment: "lorem ipsum dolor sit amet",
      attend: "YES",
      date: "2021-09-01 12:30",
    },
  ]);
  const [attend, setAttend] = useState("YES");
  const [attendSelect, setAttendSelect] = useState(options[0]);
  const [loadingLoadComment, setLoadingLoadComment] = useState(false);
  const [loadingSubmitComment, setLoadingSubmitComment] = useState(false);

  const getComments = async () => {
    setLoadingLoadComment(true);
    try {
      const commentCollectionRef = collection(db, "user-saying");
      const response = await getDocs(
        query(commentCollectionRef, orderBy("date", "desc"))
      );
      const message = response.docs.map((item) => item.data());
      setComments(message);
    } catch (error) {
      console.log({ error });
    }
    setLoadingLoadComment(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoadingSubmitComment(true);
    try {
      const commentCollectionRef = collection(db, "user-saying");
      await addDoc(commentCollectionRef, {
        userId: random(1, 1000),
        name,
        comment,
        attend,
        date: serverTimestamp(),
      });
      setName("");
      setComment("");
      setAttend("YES");
      setAttendSelect(options[0]);
      getComments();
    } catch (error) {
      console.log({ error });
    }
    setLoadingSubmitComment(false);
  };
 
  const countHadir = comments.filter((e) => e.attend === "YES").length || 0;
  const countTidakHadir = comments.filter((e) => e.attend === "NO").length || 0;
  const countRagu = comments.filter((e) => e.attend === "MAYBE").length || 0;

  useEffect(() => {
    getComments();
  }, []);

  const validate = name !== "" && comment !== "";

  return (
    <div className="flex flex-col items-center justify-center w-full p-3 md:bg-[#0F1C4F]/[0.80] bg-[#0F1C4F]/[0.50] rounded-lg border-gray-300 border-2 relative">
      <div className="absolute top-[-85px] right-[-30px] w-[200px]">
        <LottiePlayer lottieFile={lottie.Peek} />
      </div>
      <form className="w-full" onSubmit={submit}>
        <div className="flex flex-wrap mb-6 w-full">
          <div className="w-full flex pt-4 flex-col items-center mb-4 pb-6 border-b-[1px] border-gray-300">
            <span className="font-poppins text-white">
              {comments.length || 0} Ucapan
            </span>
            <div className="flex font-poppins flex-row gap-4 mt-3">
              <div className="flex w-[95px] flex-col items-center rounded-md bg-green-500/[0.8] text-white py-2 px-2">
                <span className="font-bold">{countHadir}</span>
                <span className="md:text-sm text-xs text-center">Hadir</span>
              </div>
              <div className="flex w-[95px] flex-col items-center rounded-md bg-red-400/[0.8] text-white py-2 px-2">
                <span className="font-bold">{countTidakHadir}</span>
                <span className="md:text-sm text-xs text-center">
                  Tidak Hadir
                </span>
              </div>
              <div className="flex w-[95px] flex-col items-center rounded-md bg-yellow-400/[0.8] text-white py-2 px-2">
                <span className="font-bold">{countRagu}</span>
                <span className="md:text-sm text-xs text-center">Ragu</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <input
              required
              className="rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white font-poppins mb-2"
              placeholder="Ketik namamu disini"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              required
              className="rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white font-poppins"
              id="comment"
              placeholder="Ketik ucapanmu disini"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <Select
              className="rounded custom-select font-poppins text-[#272A33]"
              placeholder="Konfirmasi kehadiran"
              options={options}
              defaultValue={attend}
              required
              value={attendSelect}
              onChange={(e) => {
                setAttendSelect(e)
                setAttend(e.value)}
              }
            />
          </div>
          <div className="w-full md:w-full flex justify-end px-3">
            <StyledButton className='bg-green-500 rounded-md px-5 py-2 text-white text-md h-fit disabled:bg-gray-500 w-[200px]' title="Kirim 🚀" onClick={submit} disabled={!validate || loadingSubmitComment} />
          </div>
        </div>
      </form>
      <div className="antialiased px-3 w-full">
        <h3 className="mb-4 text-lg font-semibold text-[#FFFFFF] font-poppins">
          Ucapan dan Do'a
        </h3>

        <div className="space-y-4 max-h-[500px] overflow-auto">
          {loadingLoadComment && (
            'loading'
          )}
          {comments.map((item, index) => {
            return (
              <div key={item.userId} className="flex">
                <div className="flex-1 align-sp border md:bg-transparent bg-[#551E63]/[0.30] border-gray-500 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed text-[#FFFFFF] font-poppins">
                  <strong className={`${index+1 === comments.length && 'text-[#FFD700] animate-pulse'}`}>{index+1 === comments.length && "[The First 👑]"} {item.name} - {options.find(e => e.value === item.attend).label} {options.find(e => e.value === item.attend).emoji}</strong>
                  <br />
                  <span className="text-xs text-gray-400">
                    {dayjs(item.date?.seconds * 1000).format("DD MMMM YYYY HH:mm")}
                  </span>
                  <p className="text-sm mt-2">{item.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 h-[300px] z-[-1]">
        <LottiePlayer lottieFile={lottie.RocketIdle} />
      </div>
    </div>
  );
};

export default CommentSection;