export default {
    // Select the attributes you want to search in
    searchableAttributes: [
      'name', 'urls0', 'urls1', 'urls2'
    ],
    // Define business metrics for ranking and sorting
    customRanking: [
      'desc(name)'
    ],
    // Set up some attributes to filter results on
    attributesForFaceting: ['name, urls0']
  }