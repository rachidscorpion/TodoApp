export const CREATE = 'create'
export const DELETE = 'delete'
export const EDIT = 'edit'

export const CREATETASK = (data) => ({
    type: CREATE,
    inpttitle: data.title,
    inptdescription: data.description,
})

export const DELETETASK = (id) => ({
    type: DELETE,
    index: id,

})

export const EDITTASK = (data) => ({
    type: EDIT,
    inpttitle: data.title,
    inptdescription: data.description,
    id: data.param

})
