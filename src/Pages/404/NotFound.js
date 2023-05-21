import React from "react";
import { useNavigate } from "react-router-dom";

import "./NotFound.css";

// export default function NotFound() {
//   return <div className="bg-light p-5">NotFound</div>;
// }
import { Button, Result } from "antd";
export default function NotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={handleClick} type="primary">
          Back Home
        </Button>
      }
    />
  );
}
