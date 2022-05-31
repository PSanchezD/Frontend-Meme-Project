function Modal(props) {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <button>download</button>
          <button onClick={props.shows}>close</button>
        </div>
        <div className="modal.content">
          <img key={props.item.id} src={props.item.url} alt="noimage"></img>
        </div>
      </div>
    </div>
  );
}
export default Modal;
