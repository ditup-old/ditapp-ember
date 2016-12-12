import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  // send only changed attributes with PATCH
  serializeAttribute(snapshot, json, key, attributes) {
    if (snapshot.record.get('isNew') || snapshot.changedAttributes()[key]) {
      this._super(snapshot, json, key, attributes);
    }
  }

});
