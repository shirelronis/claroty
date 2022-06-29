const { ObjectId } = require("mongodb")

const buildFindQuery = (requestQuery) => {
  const query = {}
  if (requestQuery.screenId != null) {
    query['screens'] = requestQuery.screenId
  }
  if (requestQuery.username != null) {
    query['username'] = requestQuery.username
  }
  if (requestQuery.password != null) {
    query['password'] = requestQuery.password
  }
  if (requestQuery.id != null) {
    query['_id'] = new ObjectId(requestQuery.id)
  }

  return query
}

module.exports = { buildFindQuery }