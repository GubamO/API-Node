import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { post: Post } = prisma
//
export default {
    getAll(req, res) {
        Post.findMany()
            .then((data)=> {
                res.status(200).send(data)
            })
            .catch((error)=> {
                res.status(500).send({
                    message: error.message || "Some error occured with Posts"
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
                    ? res.status(200).send(data)
                    : res.status(404).send({
                        message: `Cannot find Post with id=${id}`
                    })
            })
            .catch((error)=> {
                res.status(500).send({
                    message: error.message || `Some error occured Post with id=${id}`
                })
            })
    },

    create(req, res) {
        const { id } = req.params
        const { userId, title, content, description } = req.body

        Post.create({
            where: {
                id: parseInt(id),
            },
            data: {
                userId: parseInt(userId),
                title: title,
                content: content,
                description: description
            }
        })
            .then((data)=> {
                res.status(201).send({
                    message: "Post was create successfully !"
                })      
            })
            .catch((error)=> {
                res.status(500).send({
                    message: error.message || "Some error occured when creating Post"
                })
            })
    },

    update(req, res) {
        const { id } = req.params
        const { userId, title, content, description } = req.body

        Post.update({
            where: {
                id: parseInt(id),
            },
            data: {
                userId: parseInt(userId),
                title: title,
                content: content,
                description: description
            }
        })
            .then((data)=> {
                res.status(200).send({
                    message: `Post was updated successfully !`
                })      
            })
            .catch((error)=> {
                res.status(500).send({
                    message: error.message || `Some error occured when updating Post with id=${id}`
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
                res.status(200).send({
                    message: `Post was deleted successfully !`
                })      
            })
            .catch((error)=> {
                res.status(500).send({
                    message: error.message || `Some error occured when deleting Post with id=${id}`
                })
            })
    }
}







