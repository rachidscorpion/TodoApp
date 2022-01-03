export const CREATE = 'create'
export const DELETE = 'delete'

export const CREATETASK = (data) => ({
    type: CREATE,
    inpttitle: data.title,
    inptdescription: data.description,
})

export const DELETETASK = (id) => ({
    type: DELETE,
    index: id,

})