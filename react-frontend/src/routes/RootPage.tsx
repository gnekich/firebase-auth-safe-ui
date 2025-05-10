import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import ConfirmFirebaseRedirect from "@/components/ConfirmFirebaseRedirect";

function Page() {
  const navigate = useNavigate();

  return (
    <>
      <ConfirmFirebaseRedirect />
    </>
  );
}

export default Page;
