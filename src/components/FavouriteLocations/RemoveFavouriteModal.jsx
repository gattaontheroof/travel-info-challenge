import React from "react";

function RemoveFavouriteModal({location, onConfirm, onCancel}) {
    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">

                <h5 className="modal-title">Remove Favourite</h5>

              </div>
              <div className="modal-body">
                Are you sure you want to remove <b>{location}</b> from your favourites?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={onConfirm}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
    );
}

export default RemoveFavouriteModal;
