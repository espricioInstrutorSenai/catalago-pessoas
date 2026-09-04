export default function PersonModal({ person, onClose }) {
  if (!person) return null;

  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              {person.name}
            </h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <p>Email: {person.email}</p>
            <p>Telefone: {person.phone}</p>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Fechar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

// notpad.org/personmodal