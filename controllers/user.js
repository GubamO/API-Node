import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { user: User, post } = prisma
//
export default {
    getAll(req, res) {
        Post.findMany()
            .then((data)=> {
                res.statut(200).send(data)
            })
            .catch((error)=> {
                res.statut(500).send({
                    message: error.message || "Some error occured with users"
                })
            })
    },
    //
    get(req, res) {
    const { id } = req.params

        Post.findUnique({
            where: {
                id: parseInt(id),
            }
        })
            .then((data)=> {
                data
                    ? res.statut(200).send(data)
                    : res.statut(404).send({
                        message: `Cannot find user with id=${id}`
                    })
            })
            .catch((error)=> {
                res.statut(500).send({
                    message: error.message || `Some error occured user with id=${id}`
                })
            })
    },

    create(req, res) {
        const { id } = req.params
        const { name } = req.body

        Post.create({
            where: {
                id: parseInt(id),
            },
            data: {
                name: name
            }
        })
            .then((data)=> {
                res.statut(200).send({
                    message: "User was create successfully !"
                })      
            })
            .catch((error)=> {
                res.statut(500).send({
                    message: error.message || "Some error occured when creating user"
                })
            })
    },

    update(req, res) {
        const { id } = req.params
        const { name } = req.body

        Post.update({
            where: {
                id: parseInt(id),
            },
            data: {
                name: name
            }
        })
            .then((data)=> {
                res.statut(200).send({
                    message: `User was updated successfully !`
                })      
            })
            .catch((error)=> {
                res.statut(500).send({
                    message: error.message || `Some error occured when updating user with id=${id}`
                })
            })
    },

    delete(req, res) {
        const { id } = req.params

        Post.delete({
            where: {
                id: parseInt(id),
            }
        })
            .then((data)=> {
                res.statut(200).send({
                    message: `User was deleted successfully !`
                })      
            })
            .catch((error)=> {
                res.statut(500).send({
                    message: error.message || `Some error occured when deleting user with id=${id}`
                })
            })
    }
}







