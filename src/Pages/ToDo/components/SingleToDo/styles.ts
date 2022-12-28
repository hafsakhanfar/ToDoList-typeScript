import React from "react";

const styles: { [key: string]: React.CSSProperties } = {
  task: {
    marginLeft: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  toDo: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    width: "95%",
    border: "rgba(90, 92, 94, 0.534) 1.5px solid",
    borderRadius: "0.3rem",
    padding: "0px 15px 0px 15px",
    marginTop: "7px",
    boxShadow: "rgba(90, 92, 94, 0.534) 0px 12px 10px -12px",
  },
  completed: {
    color: "rgba(192, 192, 192, 0.8)",
    textDecoration: "line-through",
  },
  deleteButton: {
    backgroundColor: "rgb(189, 189, 189)",
  },

  button: {
    backgroundColor: "#302b63",
    borderRadius: "6px",
    borderWidth: "0",
    boxShadow:
      "rgba(50, 50, 93, 0.1) 0 0 0 1px inset, rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0",
    color: "#fff",
    cursor: "pointer",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    fontSize: "100%",
    height: "44px",
    lineHeight: "1.15",
    margin: "12px 0 10px 12px",
    outline: "none",
    position: "relative",
    textAlign: "center",
    width: "75px",
    padding: "10px",
  },
};
export default styles;
