const Message = ({ message }) => {
  if (message === null) return null;
  return (
    <div
      style={{
        color: "#ff4b4b",
        backgroundColor: "white",
        padding: "1vw 2vw",
        display: "flex",
        width: "max-content",
        border: "2px solid #fd9090",
        borderRadius: "8px",
        margin: "auto",
        marginTop: "2vh",
      }}
    >
      {message}
    </div>
  );
};

export default Message;
