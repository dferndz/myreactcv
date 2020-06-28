import React from "react";
import { useState, useEffect } from "react";
import firebase from "firebase";
import { CV, EmptyCv } from "../types";

const CV_API_ID = process.env.REACT_APP_CV_API;

if (!CV_API_ID) {
  throw new Error("REACT_APP_CV_API env variable not found");
}

const useMycv = () => {
  const [data, setData] = useState<CV>(EmptyCv);
  const [pending, setPending] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<any>(null);

  const rootRef = firebase.database().ref().child(CV_API_ID);
  const mycv = rootRef.child("cv");

  const fetch = async () => {
    setPending(true);
    setFetching(true);

    mycv.on("value", (snap) => {
      setData(snap.val());
      setPending(false);
      setFetching(false);
    });
  };

  const update = async (value: CV) => {
    setPending(true);

    mycv
      .set(value)
      .catch((e) => {
        setError(e);
        console.log(e);
      })
      .finally(() => setPending(false));
  };

  useEffect(() => {
    fetch();
  }, []);

  return { data, pending, error, update, fetching };
};

export default useMycv;
