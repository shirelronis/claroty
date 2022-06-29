const { getDB } = require('./database')
const { users } = require('../data/users')

const initializeDb = async () => {
    const db = getDB()
    await db.dropDatabase()
    await db.collection('users').insertMany(users)
}

const insertOne = (collection, query) => {
    return getDB().collection(collection).insertOne(query)
}

const update = (collection, query, update, options) => {
    return getDB().collection(collection).update(query, update, options)
}

const updateOne = (collection, query, update, options) => {
    return getDB().collection(collection).updateOne(query, update, options)
}

const find = (collection, query) => {
    return getDB().collection(collection).find(query)
}

const deleteOne = (collection, query) => {
    return getDB().collection(collection).deleteOne(query)
}

module.exports = {initializeDb, insertOne, update, find, deleteOne, updateOne }