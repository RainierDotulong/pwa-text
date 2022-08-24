import { openDB } from 'idb'

const initdb = async () =>
	openDB('jate', 1, {
		upgrade(db) {
			if (db.objectStoreNames.contains('jate')) {
				console.log('jate database already exists')
				return
			}
			db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true })
			console.log('jate database created')
		},
	})
export const putDb = async (DBContent) => {
	console.log('Seeking DB data to update.')
	const jateDB = await openDB('jate', 1)
	const jateReadWrite = jateDB.transaction('jate', 'readwrite')
	const jateObject = jateReadWrite.objectStore('jate')
	const request = jateObject.put({ id: 1, value: DBContent })
	const response = await request
	console.log(`Did it work? ${response}`)
}
export const getDb = async () => {
	console.log('Seeking DB data to update.')
	const jateDB = await openDB('jate', 1)
	const jateRead = jateDB.transaction('jate', 'readonly')
	const jateObject = jateRead.objectStore('jate')
	const request = jateObject.getAll(1)
	const result = await request
}
initdb()
