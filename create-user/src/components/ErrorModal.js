import ReactDOM from "react-dom";

import Card from "./Card";
import style from "./ErrorModal.module.css";
import Button from "./Button";

function Backdrop(props) {
  return <div className={style.backdrop} onClick={props.onClick} />;
}

function ModalOverlay(props) {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
}

export default ErrorModal;
