import React, { useEffect } from 'react';

function BookServiceModal() {
  useEffect(() => {
    const modal = document.getElementById('bookServiceModal');
    modal.addEventListener('show.bs.modal', (event) => {
      const trigger = event.relatedTarget;
      const serviceName = trigger.getAttribute('data-bs-service');
      const modalTitle = modal.querySelector('#service-name');
      modalTitle.textContent = `Service: ${serviceName}`;
    });
  }, []);

  return (
    <div className="modal fade" id="bookServiceModal" tabIndex="-1" aria-labelledby="bookServiceModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="bookServiceModalLabel">Book Service</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p id="service-name"></p>
            <form>
              <div className="mb-3">
                <label htmlFor="service-date" className="col-form-label">Service Date:</label>
                <input type="date" className="form-control" id="service-date" />
              </div>
              <div className="mb-3">
                <label htmlFor="service-time" className="col-form-label">Service Time:</label>
                <input type="time" className="form-control" id="service-time" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookServiceModal;
