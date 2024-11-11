import React from "react";
import type { SelectProps } from "antd";
import { Select, Space } from "antd";
import style from "./SearchBar.module.css";
import axios from "axios";

const options: SelectProps["options"] = [
  {
    label: "China",
    value: "international",
    emoji: "🇨🇳",
    desc: "China (中国)",
  },
  {
    label: "RUS",
    value: "russian",
    emoji: "🇷🇺",
    desc: "RUS (Россия)",
  },
  {
    label: "Japan",
    value: "international",
    emoji: "🇯🇵",
    desc: "Japan (日本)",
  },
  {
    label: "French",
    value: "international",
    emoji: "🇫🇷",
    desc: "French (France)",
  },
  {
    label: "Italy",
    value: "international",
    emoji: "🇮🇹",
    desc: "Italy (Italia)",
  },
];

const SearchBar: React.FC = ({ setRestaurant }) => {
  const handleChange = (value: string[]) => {
    axios
      .post(
        "http://localhost:3000/api/map/search",
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
      placeholder="выбери кухню какой страны, ты хотел бы найти"
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
