import React from "react";
import { useState, useEffect } from "react";
import firebase from "firebase";

const CV_API_ID = process.env.REACT_APP_CV_API;

if (!CV_API_ID) {
  throw new Error("REACT_APP_CV_API env variable not found");
}

const useMycv = () => {
  const [data, setData] = useState<any[]>([]);
  const [pending, setPending] = useState(false);
  const [progress, setProgress] = useState(100);
  const [error, setError] = useState<any>(null);

  const rootRef = firebase.storage().ref().child("images").child(CV_API_ID);

  const fetch = async () => {
    setPending(true);
    const files = <any>[];
    rootRef
      .listAll()
      .then((res) => {
        res.items.forEach((item) => {
          item.getDownloadURL().then((url) => {
            files.push({ name: item.name, link: url });
          });
        });
      })
      .then(() => {
        setData(files);
      })
      .catch((e) => setError(e))
      .finally(() => {
        setPending(false);
      });
  };

  const upload = async (file: any) => {
    var uploadTask = rootRef.child(file.name).put(file);

    uploadTask.on(
      "state_changed",
      function (snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProgress(progress);
      },
      function (e) {
        console.log(e);
        setError(e);
      },
      function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        const files = [...data];
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          files.push({ name: uploadTask.snapshot.ref.name, link: url });
          setData(files);
          setProgress(100);
        });
      }
    );
    fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return { data, pending, error, progress, upload };
};

export default useMycv;
