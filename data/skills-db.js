const skills = [
  {text: 'Git', done: true, _id: 1001},
  {text: 'GitHub', done: true, _id: 1002},
  {text: 'HTML', done: true, _id: 1003},
  {text: 'CSS', done: true, _id: 1004},
  {text: 'Java Script', done: false, _id: 1005},
  {text: 'Create online game for project', done: true, _id: 1006},
  {text: 'React', done: false, _id: 1007},
  {text: 'Python', done: false, _id: 1008}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) => {
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ("No todo was found")
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback){
  skill._id = Date.now() % 1000000
  skill.done = false
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the todo object
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No todo was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

export { 
	find,
  findById,
  create,
  findByIdAndDelete
}