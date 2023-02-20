// If one word of the query matches a city or a country,
// we disable IP-based geolocation
export default [
    {
      objectID: 'name',
      condition: {
        pattern: '{facet:name}',
        anchoring: 'contains'
      },
      consequence: {
        params: {
          aroundLatLngViaIP: false
        }
      }
    },
    {
      objectID: 'urls0',
      condition: {
        pattern: '{facet:urls0}',
        anchoring: 'contains'
      },
      consequence: {
        params: {
          aroundLatLngViaIP: false
        }
      }
    }
  ]