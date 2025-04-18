import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // ToDo : Make it more easy to understand
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

//THIS IS A PROTECTED CONTAINER....DEKHO HAM SEPERATLY HAR COMPONENT MAI LOG IN H KI NAHI CHECK KARNE KI JAGAH EK AUTHLAYOUT BNAYEGNE JO EK PROTECTED CONTAINER KI TARAH KAAM KAREGA AUR AGAR ALLOWED HOGA TABHI APNE CHILDREN LOAD KARVYEGA...MORE CLEAR PICTURE MAIN.JSX DEKH USSE PATA LAGEGI
