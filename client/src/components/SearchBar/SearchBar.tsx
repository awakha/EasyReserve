import React from "react";
import type { SelectProps } from "antd";
import { Select, Space } from "antd";
import style from "./SearchBar.module.css";
import axios from "axios";

const options: SelectProps["options"] = [
  {
    label: "China",
    value: "china",
    emoji: "🇨🇳",
    desc: "China (中国)",
  },
  {
    label: "RUS",
    value: "Russia",
    emoji: "🇷🇺",
    desc: "RUS (Россия)",
  },
  {
    label: "Japan",
    value: "japan",
    emoji: "🇯🇵",
    desc: "Japan (日本)",
  },
  {
    label: "French",
    value: "France",
    emoji: "🇫🇷",
    desc: "French (France)",
  },
  {
    label: "Italy",
    value: "Italy",
    emoji: "🇮🇹",
    desc: "Italy (Italia)",
  },
];

const SearchBar: React.FC = ({ setRestaurant }) => {
  const handleChange = (value: string[]) => {
    axios
      .post(
        "http://localhost:3000/api/search",
        { countries: value },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  };

  return (
    <Select
      mode="multiple"
      placeholder="select one country"
      defaultValue={["Russia"]}
      onChange={handleChange}
      optionLabelProp="label"
      options={options}
      optionRender={(option) => (
        <Space>
          <span role="img" aria-label={option.data.label}>
            {option.data.emoji}
          </span>
          {option.data.desc}
        </Space>
      )}
      className={style.SearchBar}
    />
  );
};

export default SearchBar;
