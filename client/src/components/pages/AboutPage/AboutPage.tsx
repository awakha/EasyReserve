import React from "react";
import style from "./AboutPage.module.css";
import { CustomLayout } from "../../Layout/CustomLayout";
import { FormComponent } from "../../FormComponent/FormComponent";


const AboutPage: React.FC = () => {

  return (
    <CustomLayout>
        <FormComponent/>
    </CustomLayout>
  );
};

export default AboutPage;