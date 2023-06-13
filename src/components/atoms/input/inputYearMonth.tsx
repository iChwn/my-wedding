import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { range } from "lodash";
import { icon_list } from "assets/image";
 

type MenuType = {
  children?: React.ReactNode;
  className?: string;
}
const Menu = (props:MenuType) => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)';
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 12,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        position: 'absolute',
        zIndex: 3,
        width: '365px',
        overflow: 'hidden',
        right: 0,
      }}
      {...props}
    />
  );
};

type DropdownType = {
  children: React.ReactNode;
  isOpen: boolean;
  target: React.ReactNode;
  onClose?: () => void;
}
const Dropdown = ({ children, isOpen, target, onClose }: DropdownType) => (
  <div className="relative border-[1px] border-[#BBBBBB] rounded-md w-full">
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {/* {isOpen ? <div className="top-0 left0 fixed z-[1]" onClick={onClose} /> : null} */}
  </div>
); 

const years = range(1990, dayjs(new Date()).year() + 1, 1);
// const days = ["Sen", "Sel", "Rab", "Wed", "Thu", "Fri", "Sat"];
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

type OnChangeCallbackType = {
  target: {
    type: string | undefined;
    name: string;
    value: Date;
  }
}
type InputYearMonthType = {
  data: {
    placeholder: string;
    type?: string;
    value: Date | null | any;
    name: string;
    title?: string;
    hideTime?: boolean;
  },
  onChange: (e:OnChangeCallbackType) => void;
}
const InputYearMonth = ({ data, onChange }: InputYearMonthType) => {
  const [isOpen, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!isOpen)
  }

  const handleOnChange = (value:Date) => {
    let originalDate = value
    var currentDate = new Date();
    originalDate.setDate(currentDate.getDate());
    // originalDate.setMonth(currentDate.getMonth());
    // originalDate.setFullYear(currentDate.getFullYear());

    const dateData = {
      target: {
        type: data.type,
        name: data.name,
        value: originalDate
      }
    }
    onChange(dateData)
  }

  const renderDateText = () => {
    if(data.value) {
      return dayjs(data.value).format("MMM YYYY")
    } else {
      return data.placeholder
    }
  }

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={toggleOpen}
      target={
        <button
          disabled={isOpen}
          onClick={toggleOpen}
          className="w-full text-left px-3 py-2 flex items-center justify-between"
        >
          <span className={data.value ? "text-black" : "text-[#AAAAAA]" }>
            {renderDateText()}
          </span>
          <img src={icon_list.cheveron_bottom_gray} alt="" />
        </button>
      }
    >
      <DatePicker
        className="shadow-higher"
        selected={data.value}
        onChange={handleOnChange}
        inline
        // showTimeInput={data.hideTime ? false : true}
        onClickOutside={toggleOpen}
        showMonthYearPicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
        }) => (
          <div
            className="flex w-full flex-row"
            style={{
              padding: 10,
            }}
          >
            {/* <select
              className="select-date text-xl"
              value={months[dayjs(date).month()]}
              onChange={e => changeMonth(months.indexOf(e.target.value))}
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select> */}
            <select
              className="select-date text-xl w-full"
              value={dayjs(date).year()}
              onChange={({ target: { value } }) => changeYear(~~value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      />
    </Dropdown>
  );
}

InputYearMonth.propTypes = {
  data: PropTypes.object,
};

InputYearMonth.defaultProps = {
  data: {
    title: "",
    placeholder: "",
    type: "",
    onChange: () => {},
    value: null,
    options: [
      { value: "", label: "" }
    ],
    hideTime: false,
    onSelectSearch: null // for async process
  }
};

export default InputYearMonth;
