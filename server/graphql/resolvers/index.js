module.exports = {
    Query: {
        login: (_, { email }, { dataSources }) => {
            console.log(dataSources)
        }
    },
    Mutation: {
        addAdmin: (_, { email }, { dataSources }) => {
            return dataSources.mongo.admin.create({
                email
            })
        }
    }
}