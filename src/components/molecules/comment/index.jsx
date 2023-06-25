import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import {
	CalendarIcon,
} from '@heroicons/react/solid'
import "./custom.scss";
import BaseButton from "components/atoms/button/basicButton";

const options = [
  { value: "YES", label: "Hadir" },
  { value: "NO", label: "Tidak hadir" },
  { value: "MAYBE", label: "Masih ragu" },
];

const CommentSection = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [attend, setAttend] = useState("YES");
  const [attendSelect, setAttendSelect] = useState(options[0]);
  const [loadingLoadComment, setLoadingLoadComment] = useState(false);
  const [loadingSubmitComment, setLoadingSubmitComment] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoadingSubmitComment(true);
  };
  const countHadir =
    comments.filter((e) => e.data.attend === "YES").length || 0;
  const countTidakHadir =
    comments.filter((e) => e.data.attend === "NO").length || 0;
  const countRagu =
    comments.filter((e) => e.data.attend === "MAYBE").length || 0;

  return (
    <div className="flex flex-col items-center justify-center w-full p-3 bg-[#0F1C4F]/[0.80] rounded-lg border-gray-300 border-2">
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
            <BaseButton className='bg-red-500 rounded-md px-5 py-2 text-white text-md h-fit disabled:bg-gray-500' title="Simpan" onClick={() => console.log("wkwkwkw")} disabled={loadingSubmitComment} />
          </div>
        </div>
      </form>
      <div className="antialiased px-3 mb-8 w-full">
        <h3 className="mb-4 text-lg font-semibold text-[#272A33] font-poppins">
          Ucapan dan Do'a
        </h3>

        <div className="space-y-4 max-h-[500px] overflow-auto">
          {loadingLoadComment && (
            'loading'
          )}
          {comments.map((item) => {
            return (
              <div key={item.id} className="flex">
                <div className="flex-1 align-sp border border-gray-500 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed text-[#272A33] font-poppins">
                  <strong>{item.data.name}</strong>
                  <br />
                  <span className="text-xs text-gray-400">
                    10-05-2000 12:20
                  </span>
                  <p className="text-sm mt-2">{item.data.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;